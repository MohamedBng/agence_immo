require 'rails_helper'

RSpec.describe "Admin::Users", type: :request do
  let(:user) { create(:user, role: "admin") }

  before do
    sign_in user
  end

  describe "GET /index" do
    it "returns http success" do
      get admin_users_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get new_admin_user_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get admin_user_path(user)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    context "with valid attributes" do
      it "creates a new user and redirects to the index" do
        expect {
          post admin_users_path, params: { user: attributes_for(:user) }
        }.to change(User, :count).by(1)
        expect(response).to redirect_to([:admin, User.last])
      end
    end

    context "with invalid attributes" do
      it "does not create a new user" do
        expect {
          post admin_users_path, params: { user: { email: 'invalid', role: 'admin' } }
        }.to_not change(User, :count)
      end
    end
  end

  describe "PUT /update" do
    let(:updated_email) { "updated@example.com" }

    it "updates the user and redirects to the index" do
      put admin_user_path(user), params: { user: { email: updated_email } }
      user.reload
      expect(user.email).to eq(updated_email)
      expect(response).to redirect_to([:admin, user])
    end
  end

  describe "DELETE /destroy" do
    it "destroys the user and redirects to the index" do
      delete admin_user_path(user)
      expect(response).to redirect_to(admin_users_path)
      expect(User.exists?(user.id)).to be_falsey
    end
  end
end
