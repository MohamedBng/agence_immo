FactoryBot.define do
  factory :property do
    title { { "fr" => "Villa " + Faker::Address.community + " " + Faker::Color.color_name.capitalize, "en" => "Villa " + Faker::Address.community + " " + Faker::Color.color_name.capitalize } }
    description { { "fr" => Faker::Lorem.paragraph, "en" => Faker::Lorem.paragraph } }
    price { Faker::Commerce.price(range: 100000..1000000) }
    address { { "street" => Faker::Address.street_address, "city" => ["Abou_Dabi", "Al_Ain", "Ajman", "Charjah", "Khor_Fakkan", "Dubaï", "Foudjaïrah", "Oumm_al_Qaïwaïn", "Ras_el_Khaïmah"].sample } }
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
