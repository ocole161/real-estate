class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :property_id
end
