class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :email, :phone, :is_admin
end
