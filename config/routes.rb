Rails.application.routes.draw do
  root 'home#index'

  devise_for :users

  resources :properties do
    get '/page/:page', action: :index, on: :collection
  end
  namespace :admin do
    get 'dashboard', to: 'dashboard#index'
    resources :users
    resources :properties do
      patch :update_position, on: :member
    end
  end
end
