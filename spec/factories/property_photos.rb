FactoryBot.define do
  factory :property_photo do
    association :property
  
    after(:build) do |property_photo|
      file_path = Rails.root.join('spec', 'support', 'assets', 'property.jpg')
      file = File.open(file_path, 'rb')
  
      property_photo.file = file
    end
  end  
end
