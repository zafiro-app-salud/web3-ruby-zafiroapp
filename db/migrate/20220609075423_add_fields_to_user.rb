class AddFieldsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :string
    add_column :users, :views, :integer
    add_column :users, :first_name, :string
    add_column :users, :second_name, :string
    add_column :users, :last_name, :string
    add_column :users, :second_last, :string
    add_column :users, :type_document, :string
    add_column :users, :cellphone, :string
    add_column :users, :no_document, :string
    add_column :users, :genero, :string
    add_column :users, :birthdate, :date
    add_column :users, :permission_level, :integer
    add_index :users, :email,   unique: true
  end
end
