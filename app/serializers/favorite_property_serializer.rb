class FavoritePropertySerializer < ActiveModel::Serializer
  attributes :id, :property_id, :user_id, :created_at

  belongs_to :property
  belongs_to :user
end
