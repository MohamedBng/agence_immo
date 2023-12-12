FactoryBot.define do
    factory :user do
      email { Faker::Internet.email }
      password { Faker::Internet.password(min_length: 6) }
      role { ["admin", "agent_immobilier"].sample }
    end
  end