class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize, only: [:show]

  private

  def authorize
    return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
  end
  
  def render_not_found_response(e)
    render json: { error: "#{e.model} not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end
end