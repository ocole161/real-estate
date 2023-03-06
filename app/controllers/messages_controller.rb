class MessagesController < ApplicationController
    def index
        render json: Message.all
    end

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    private

    def message_params
        params.permit(:body, :property_id, :user_id)
    end
end
