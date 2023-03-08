class PropertiesController < ApplicationController
    before_action :authorized_user, only: [:create, :update, :destroy]

    def index
        render json: Property.all
    end

    def show
        render json: Property.find(params[:id])
    end

    def create
        new_property = Property.create!(property_params)
        render json: new_property, status: :created
    end

    def update
        property = Property.find(params[:id])
        property.update!(property_params)
        render json: property, status: :updated
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head :no_content
    end

    private

    def property_params
        [params.permit(:price, :address, :image_url, :beds, :baths, :sqft, :neighborhood)]
    end
end
