class FavoritePropertiesController < ApplicationController
    def index
        render json: FavoriteProperty.all
    end
end
