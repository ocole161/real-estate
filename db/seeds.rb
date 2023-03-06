User.destroy_all
Property.destroy_all
Message.destroy_all
FavoriteProperty.destroy_all

puts "Seeding started..."

# Constants
property_images = ["https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/6499168/org/000.jpg?width=1280&v=2023-01-19_000000"]
neighborhoods = ["LoDo", "LoHi", "RiNo", "Sunnyside", "Berkeley", "Five Points", "Jefferson Park"]
messages = ["I love this place!", "Please send me more information about this property!", "I am interested!", "I'm ready to put in an offer right now!", "Can you call me regaring this listing?"]

# Create properties
10.times { Property.create(
    address: Faker::Address.street_address,
    image_url: property_images.sample,
    price: (Faker::Number.between(from: 25, to: 300) * 10000),
    beds: Faker::Number.between(from: 1, to: 4),
    baths: Faker::Number.between(from: 1, to: 3),
    sqft: Faker::Number.between(from: 1500, to: 5000),
    neighborhood: neighborhoods.sample
)}

# Create users
    User.create(username: "test", password: "test", email: "test@example.com", phone: Faker::PhoneNumber.cell_phone, is_admin: false)
    User.create(username: "admin", password: "admin", email: "admin@example.com", phone: Faker::PhoneNumber.cell_phone, is_admin: true)


# Create messages
20.times { Message.create(
    body: messages.sample,
    user_id: User.first.id,
    property_id: Property.all.sample.id
)}

# Create likes
FavoriteProperty.create(property_id: Property.all.sample.id, user_id: User.first.id)

puts "Seeding finished!"