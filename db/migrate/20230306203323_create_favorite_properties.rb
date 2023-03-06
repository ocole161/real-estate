class CreateFavoriteProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_properties do |t|
      t.belongs_to :property
      t.belongs_to :user
      t.timestamps
    end
  end
end
