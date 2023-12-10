Rails.application.routes.draw do
  devise_for :users

  namespace :admin do
    get 'dashboard', to: 'dashboard#index'
    resources :users
  end

  # Définit la page de connexion de Devise comme page d'accueil de l'application
  root to: 'devise/sessions#new'

  # Supprimez ou commentez la ligne suivante, car vous avez déjà défini une route root
  # root "articles#index"
end
