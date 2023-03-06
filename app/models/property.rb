class Property < ApplicationRecord
    has_many :messages
    has_many :favorite_properties
    has_many :users, through: :favorite_properties
end
