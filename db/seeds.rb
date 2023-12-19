require 'factory_bot_rails'

puts "Creating 10 properties..."

10.times do
    FactoryBot.create(:property)
end

puts "Creating admin..."

FactoryBot.create(:user, email: "mohamed.bengrich@outlook.fr", password: "azertyuiop")