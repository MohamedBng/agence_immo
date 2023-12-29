class Admin::PropertiesController < ApplicationController
    layout 'admin'
    before_action :authenticate_user!
    before_action :set_property, only: [:edit, :update, :destroy, :show]

    def index
        @properties = Property.all
        authorize @properties
    end

    def new
        @property = Property.new
        @property.property_photos.build
        authorize @property
    end

    def show
        authorize @property
        @property.property_photos = @property.property_photos.ordered
    end

    def edit
        @property.property_photos = @property.property_photos.ordered
    end    

    def create
        @property = Property.new(property_params)
        authorize @property
        if @property.save
          redirect_to [:admin, @property], notice: t('admin.properties.created')
        else
          flash[:alert] = @property.errors.full_messages.join(', ')
          Rails.logger.info "Property errors: #{@property.errors.inspect}"
          render :new
        end
    end
      

    def update
        authorize @property
        if @property.update(property_params)
            redirect_to [:admin, @property], notice: t('admin.properties.updated')
        else
            Rails.logger.info @property.errors.inspect
            render :edit
        end
    end

    def update_position
      @property = Property.find(params[:id])
      authorize @property
      p "okk"
    end

    def destroy
        authorize @property
        @property.destroy
        redirect_to admin_properties_path, notice: t('admin.properties.destroyed')
    end

    private

    def set_property
        @property = Property.find(params[:id])
    end

    def property_params
        params.require(:property).permit(
          :price, :bedrooms, :bathrooms, :area, :property_type, :status,
          :title_fr, :title_en, :description_fr, :description_en, :street, :city, :country,
          property_photos_attributes: [:id, :file, :position, :_destroy]
        ).tap do |permitted_params|
          permitted_params[:title] = {
            'fr' => permitted_params.delete(:title_fr),
            'en' => permitted_params.delete(:title_en)
          }
          permitted_params[:description] = {
            'fr' => permitted_params.delete(:description_fr),
            'en' => permitted_params.delete(:description_en)
          }
          permitted_params[:address] = {
            'street' => permitted_params.delete(:street),
            'city' => permitted_params.delete(:city),
            'country' => permitted_params.delete(:country)
          }
        end
    end                     
end
