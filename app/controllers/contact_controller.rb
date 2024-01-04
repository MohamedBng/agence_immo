class ContactController < ApplicationController
    skip_forgery_protection
    def send_email
        name = params[:name]
        email = params[:email]
        message = params[:message]
        ContactMailer.send_contact_email(name, email, message).deliver_now
        redirect_to root_path, notice: "Votre message a bien été envoyé"
    end 
end
