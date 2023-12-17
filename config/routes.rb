Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    root to: 'devise/sessions#new'
  end

  namespace :admin do
    get 'dashboard', to: 'dashboard#index'
    resources :users
    resources :properties
  end
end
