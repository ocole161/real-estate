User.destroy_all
Property.destroy_all
Message.destroy_all
FavoriteProperty.destroy_all

puts "Seeding started..."

# Constants
property_images = [
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/6499168/org/000.jpg?width=1280&v=2023-01-19_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/7772054/org/000.jpg?width=1280&v=2023-02-28_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/9800835/org/000.jpg?width=1280&v=1980-01-01_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/9017167/org/000.jpg?width=1280&v=2023-02-09_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/2063100/org/000.jpg?width=1280&v=2022-12-29_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/1963442/org/000.jpg?width=1280&v=2023-02-10_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/8695064/org/000.jpg?width=1280&v=2023-03-08_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/3093451/org/000.jpg?width=1280&v=2023-03-05_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/7291100/org/000.jpg?width=1280&v=2023-03-09_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/2538113/org/000.jpg?width=1280&v=2023-03-08_000000",
    "https://idx-photos-ihouseprd.b-cdn.net/CO-COMLS/5397209/org/000.jpg?width=1280&v=2023-03-07_000000",
    "https://www.abedward.com/wp-content/uploads/2015/10/upside-down-house1.jpg",
    "https://i.pinimg.com/originals/5a/7a/08/5a7a089d08dcd4bc8f60baeef9a813a1.jpg",
    "https://cakescottage.com/wp-content/uploads/2021/02/blueberry-muffins-c1a.jpg"
]
neighborhoods = ["LoDo", "LoHi", "RiNo", "Sunnyside", "Berkeley", "Five Points", "Jefferson Park"]
messages = ["I love this place!",
    "Please send me more information about this property!",
    "I am interested!",
    "I'm ready to put in an offer right now!",
    "Can you call me regaring this listing?",
    "This is exactly what I'm looking for but is a bit out of my budget, do you know of anything similar but maybe a bit more afforable?",
    "Is this house Keto-friendly?",
    "Best I can do is tree-fiddy",
    "HOT SINGLES IN YOUR AREA LOOKING FOR LOVE!!! GO TO WWWW.TOTALLYNOTASCAM.COM TO MEET THEM!!!",
    "I'd love to tour this house, can you set that up?",
    "I'm pretty sure this house is haunted.",
    "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."
    ]

# Create properties
20.times { Property.create(
    address: Faker::Address.street_address,
    image_url: property_images.sample,
    price: (Faker::Number.between(from: 25, to: 300) * 10000),
    beds: Faker::Number.between(from: 1, to: 4),
    baths: Faker::Number.between(from: 1, to: 3),
    sqft: Faker::Number.between(from: 1500, to: 5000),
    neighborhood: neighborhoods.sample
)}

# Create users
User.create(username: "user", password: "u", email: "user@google.com", phone: Faker::PhoneNumber.cell_phone, is_admin: false)
User.create(username: "admin", password: "a", email: "admin@google.com", phone: Faker::PhoneNumber.cell_phone, is_admin: true)
20.times { User.create(username: Faker::FunnyName.name, password: Faker::Alphanumeric.alpha(number: 3), email: Faker::Name.first_name + "@google.com", phone: Faker::PhoneNumber.cell_phone, is_admin: false)}


# Create messages
20.times { Message.create(
    body: messages.sample,
    user_id: User.all.sample.id,
    property_id: Property.all.sample.id
)}

# Create likes
50.times  {
FavoriteProperty.create(property_id: Property.all.sample.id, user_id: User.all.sample.id)
}

puts "Seeding finished!"