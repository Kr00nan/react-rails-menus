class Api::MenuItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  def index
    render json: MenuItem.all

  end

  def create
    item = MenuItem.new(item_params)
    if item.save
      render json: item
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update
    @item.update(item_params)
    render json: @item

  end

  def destroy
    @item.destroy
    render json: {message: 'Item deleted'}
  end

  private
  def item_params
    params.require(:menu_item).permit(:name, :meal_type)
  end

  def set_item
    @item = MenuItem.find(params[:id])
  end
end
