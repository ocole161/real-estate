class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.float :price
      t.string :address
      t.string :image_url
      t.integer :beds
      t.integer :baths
      t.integer :sqft
      t.string :neighborhood

      t.timestamps
    end
  end
end
