class PropertiesController < ApplicationController
    skip_before_action :authenticate_user!, only: [:index]
    def index
        @properties = Property.page params[:page]

        if params[:city].present?
            @properties = @properties.where("address ->> 'city' = ?", params[:city])
        end          

        if params[:property_type].present?
            @properties = @properties.where(property_type: params[:property_type])
        end
    
        if params[:status].present?
            @properties = @properties.where(status: params[:status])
        end
    
        if params[:bedrooms].present?
            @properties = @properties.where(bedrooms: params[:bedrooms])
        end
    
        if params[:bathrooms].present?
            @properties = @properties.where(bathrooms: params[:bathrooms])
        end

        @status_enum = Property.statuses.keys
        @property_type_enum = Property.property_types.keys
        @cities = Property.cities.keys
    end
  end