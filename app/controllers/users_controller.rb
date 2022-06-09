require "eth"

class UsersController < ApplicationController

  # instantiate a new user
  def new
    @user = User.new
  end

  # create a new user based on user input
  def create

    # create new user from allowed params
    @user = User.new(user_params)

    # only proceed with pretty names
    if @user and @user.username and @user.username.size > 0

      # create randome nonce
      @user.eth_nonce = SecureRandom.uuid

      # usually, we want to let the user sign the nonce to make sure
      # they are authorized to create a new user account for the
      # given CELO address. for the demo, we skip this for the
      # sake of keeping it simple.

      # only proceed with eth address
      if @user.eth_address
        # make sure the eth address is valid
        address = Eth::Address.new @user.eth_address
        if address.valid?
          # save to database
          if @user.save
            # if user is created, congratulations, send them to login
            redirect_to login_path, notice: "Successfully created an account, you may now log in."
          else
            # if it fails, eth address is already in database, go to login
            redirect_to login_path, alert: "Account already exists! Try to log in instead!"
          end
        else
          # if it fails, the eth address is not valid, stay on signup
          flash.now[:alert] = "Invalid CELO address!"
          render :new
        end
      else
        # if it fails, the process was interupted, stay on signup
        flash.now[:alert] = "Failed to get CELO address!"
        render :new
      end
    else

      # if it fails, the user did not specify a name, stay on signup
      flash.now[:alert] = "Please choose a name (length > 0)!"
      render :new
    end
  end

  private

  def user_params
    # only allow user to control name, message, signature, and address
    params.require(:user).permit(:username, :eth_address, :email, :views, :birthdate, :first_name, 
      :second_name,:last_name, :second_last, :type_document, :no_document, :genero , :cellphone, :permission_level )
  end
end

