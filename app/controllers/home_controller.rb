class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    @properties = {
      ventes: properties_json('vente'),
      locations: properties_json('location')
    }
    @cities = Property.cities.keys
  end

  private

  def properties_json(status)
    Property.where(status: Property.statuses[status])
            .ordered_by_most_recent.limit(3)
            .map do |property| 
              {
                  id: property.id,
                  image: property.property_photos.first.file_url(:small),
                  price: property.price.to_i,
                  name: CGI.escapeHTML(property.title['fr']),
                  address: format_address(property.address),
                  bathrooms: property.bathrooms.to_i.to_s,
                  bedrooms: property.bedrooms.to_i.to_s,
                  area: property.area.to_i.to_s,
                  status: property.status
              }
            end
  end

  def format_address(address)
    [address['street'], address['city'].humanize].join(', ').gsub("'", "&#39;")
  end
end
