class Message < ApplicationRecord
    belongs_to :property
    belongs_to :user

    validates :user_id, presence: true
end
