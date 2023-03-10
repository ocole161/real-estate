class Property < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :favorite_properties, dependent: :destroy
    has_many :users, through: :favorite_properties

    validates :address, presence: true
end
