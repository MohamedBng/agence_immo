class Admin::UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user, only: [:edit, :update, :destroy, :show]

    def index
        @users = User.all
        authorize @users
    end

    def new
        @user = User.new
        authorize @user
    end

    def show
        authorize @user
    end

    def create
        @user = User.new(user_params)
        authorize @user
        if @user.save
        redirect_to admin_users_path, notice: t('admin.users.created')
        else
        flash[:alert] = @user.errors.full_messages.join(', ')
        render :new
        end
    end

    def update
        authorize @user
        if @user.update(user_params)
        redirect_to admin_users_path, notice: t('admin.users.updated')
        else
        render :edit
        end
    end

    def destroy
        authorize @user
        @user.destroy
        redirect_to admin_users_path, notice: t('admin.users.destroyed')
    end

    private

    def set_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:email, :role, :password, :password_confirmation)
    end
end
  