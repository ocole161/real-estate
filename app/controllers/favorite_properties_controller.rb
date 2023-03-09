class FavoritePropertiesController < ApplicationController
    before_action :authorized_user, only: [:create]
    
    def index
        render json: FavoriteProperty.all
    end

    def create
        favorite_property = FavoriteProperty.create!(favorite_property_params)
        render json: favorite_property, status: :created
    end

    private

    def favorite_property_params
        params.permit(:property_id, :user_id)
    end
end
