class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
        t.string :username, null: false
        t.string :password_digest, null: false
        t.string :email, null: false
        t.string :session_token, null: false
        t.date   :birthdate, null: false
        t.string :gender, null: false
        t.string :orientation, null: false
        t.string :city_name, null: false
        t.string :state_name, null: false

        t.timestamps null: false
      end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
