class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :favorite_properties, dependent: :destroy
    has_many :properties, through: :favorite_properties
    has_secure_password

    validates :username, presence: true, uniqueness: :true
    validates :password, presence: true
end
