require 'rails_helper'

RSpec.describe "Admin::Properties", type: :request do
  let(:admin) { create(:user, role: "admin") }
  let(:property) { create(:property) }

  before do
    sign_in admin
  end

  describe "GET /index" do
    it "returns http success" do
      get admin_properties_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get new_admin_property_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get admin_property_path(property)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    context "with valid attributes" do
      it "creates a new property and redirects" do
        expect {
          post admin_properties_path, params: { property: attributes_for(:property) }
        }.to change(Property, :count).by(1)
        expect(response).to redirect_to([:admin, Property.last])
      end
    end

    context "with invalid attributes" do
      it "does not create a new property" do
        expect {
          post admin_properties_path, params: { property: { title: nil } } # invalid attributes
        }.to_not change(Property, :count)
      end
    end
  end

  describe "PUT /update" do
    let(:updated_title_fr) { "Nouveau Titre" }
    let(:updated_title_en) { "New Title" }
  
    it "updates the property and redirects" do
      put admin_property_path(property), params: { 
        property: { 
          title_fr: updated_title_fr, 
          title_en: updated_title_en 
        } 
      }
      property.reload
      expect(property.title['fr']).to eq(updated_title_fr)
      expect(property.title['en']).to eq(updated_title_en)
      expect(response).to redirect_to([:admin, property])
    end
  end  

  describe "DELETE /destroy" do
    it "destroys the property and redirects to the index" do
      property_to_delete = create(:property)
      expect {
        delete admin_property_path(property_to_delete)
      }.to change(Property, :count).by(-1)
      expect(response).to redirect_to(admin_properties_path)
    end
  end
end
