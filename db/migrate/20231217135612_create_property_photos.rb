class CreatePropertyPhotos < ActiveRecord::Migration[7.0]
  def change
    create_table :property_photos do |t|
      t.references :property, null: false, foreign_key: true
      t.text :file_data

      t.timestamps
    end
  end
end
