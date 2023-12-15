Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    root to: 'devise/sessions#new'
  end

  namespace :admin do
    get 'dashboard', to: 'dashboard#index'
    resources :users
  end

  # Supprimez ou commentez la ligne suivante, car vous avez déjà défini une route root
  # root "articles#index"
end
