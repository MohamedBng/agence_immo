FactoryBot.define do
  factory :property do
    title { { "fr" => Faker::Lorem.sentence, "en" => Faker::Lorem.sentence } }
    description { { "fr" => Faker::Lorem.paragraph, "en" => Faker::Lorem.paragraph } }
    price { Faker::Commerce.price(range: 100000..1000000) }
    address { { "street" => Faker::Address.street_address, "city" => Faker::Address.city } }
    bedrooms { Faker::Number.between(from: 1, to: 5) }
    bathrooms { Faker::Number.between(from: 1, to: 3) }
    area { Faker::Number.between(from: 20, to: 200) }
    property_type { ["maison", "appartement", "maisons_de_ville", "penthouses", "plots"].sample }
    status { ["vente", "location"].sample }

    after(:build) do |property|
      property.property_photos = build_list(:property_photo, 5, property: property)
    end
  end
end
