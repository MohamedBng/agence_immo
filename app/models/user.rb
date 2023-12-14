class User < ApplicationRecord
  include ImageUploader::Attachment(:image)
  attr_accessor :image_cache
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum role: { admin: 0, agent_immobilier: 1 }

  validates :role, :firstname, :lastname, presence: true

  strip_attributes
end
