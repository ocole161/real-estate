class PropertySerializer < ActiveModel::Serializer
  attributes :id, :price, :address, :image_url, :beds, :baths, :sqft, :neighborhood
end
