class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
  def index
    @property = Property.last
  end
end
