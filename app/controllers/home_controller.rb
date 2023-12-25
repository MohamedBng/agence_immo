class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @property = Property.last
    @cities = Property.cities.keys
  end
end
