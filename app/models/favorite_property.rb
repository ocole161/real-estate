class FavoriteProperty < ApplicationRecord
    belongs_to :user
    belongs_to :property

    validates :property_id, :user_id, presence: true
end
