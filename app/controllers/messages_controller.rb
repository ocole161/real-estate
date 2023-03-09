class MessagesController < ApplicationController
    before_action :authorized_user, only: [:create]
    wrap_parameters format: []
    
    def index
        render json: Message.all.order(created_at: :desc)
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
