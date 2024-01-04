class ApplicationController < ActionController::Base
    before_action :set_locale
    include Pundit::Authorization

    def change_locale
        I18n.locale = params[:locale] || I18n.default_locale
        cookies[:locale] = I18n.locale
        respond_to do |format|
            format.js
        end
    end
    
    private

    def set_locale
        I18n.locale = cookies[:locale] || I18n.default_locale
    end
end
