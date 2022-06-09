class ApiController < ActionController::API
    # inherits ::API instead of ::Base
    # estos metodos los heredara los controladores de la API
    helper_method :current_user
    helper_method :logged_in?
    
  
    # handle current user information
    def current_user
      User.find_by(id: session[:user_id])
    end
  
    # is anybody here? ;)
    def logged_in?
      !current_user.nil?
    end

end
