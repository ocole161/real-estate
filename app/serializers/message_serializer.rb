class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :property_id,:created_at

  belongs_to :user
  belongs_to :property
end
