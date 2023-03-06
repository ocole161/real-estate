class PropertiesController < ApplicationController
    def index
        render json: Property.all
    end
end
