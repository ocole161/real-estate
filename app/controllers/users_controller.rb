class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :email, :password, :phone)
    end
end
