class Property < ApplicationRecord
    has_many :property_photos, dependent: :destroy
    accepts_nested_attributes_for :property_photos, allow_destroy: true

    enum status: { vente: 0, location: 1 }
    enum property_type: { maison: 0, appartement: 1 }
  
    validates :title, :description, :price, :address, :bedrooms, :bathrooms, :area, :property_type, :status, presence: true    
end
  