class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :phone, :is_admin

  has_many :properties
  has_many :favorite_properties
end
