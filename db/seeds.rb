require 'factory_bot_rails'

puts "Creating 10 properties..."

5.times do
    FactoryBot.create(:property, :for_sale)
end

5.times do
    FactoryBot.create(:property, :for_rent)
end

puts "Creating admin..."

FactoryBot.create(:user, email: "mohamed.bengrich@outlook.fr", password: "azertyuiop")