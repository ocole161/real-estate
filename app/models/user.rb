class User < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :favorite_properties, dependent: :destroy
    has_many :properties, through: :favorite_properties
end
