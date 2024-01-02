class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @properties = properties_json
    @cities = Property.cities.keys
  end

  def properties_json
    Property.ordered_by_most_recent.limit(3).map do |property| 
      {
          id: property.id,
          image: property.property_photos.first.file_url(:small),
          price: property.price.to_i,
          name: CGI.escapeHTML(property.title['fr']),
          address: (property.address['street'] + ", " + property.address['city'].humanize).gsub("'", "&#39;"),
          bathrooms: property.bathrooms.to_i.to_s,
          bedrooms: property.bedrooms.to_i.to_s,
          area: property.area.to_i.to_s
      }
    end
  end
end
