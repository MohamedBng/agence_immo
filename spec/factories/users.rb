FactoryBot.define do
    factory :user do
      email { Faker::Internet.email }
      password { Faker::Internet.password(min_length: 6) }
      role { ["admin", "agent_immobilier"].sample }
      lastname { Faker::Name.last_name }
      firstname { Faker::Name.first_name }

      after(:build) do |user|
        image_path = Rails.root.join('spec', 'support', 'assets', 'test.jpg')
        user.image = File.open(image_path, 'rb') if File.exist?(image_path)
      end
    end  
  end