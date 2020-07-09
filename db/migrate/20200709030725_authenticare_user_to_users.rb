class AuthenticareUserToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :authenticare_user, :datetime
  end
end
