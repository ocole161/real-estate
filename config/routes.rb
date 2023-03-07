Rails.application.routes.draw do
  
  resources :favorite_properties
  resources :messages
  resources :users
  resources :properties

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/authorized", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
