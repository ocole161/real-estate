class PropertySerializer < ActiveModel::Serializer
  attributes :id, :price, :address, :image_url, :beds, :baths, :sqft, :neighborhood

  has_many :favorite_properties
end
