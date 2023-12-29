class AddPositionToPropertyPhoto < ActiveRecord::Migration[7.0]
  def change
    add_column :property_photos, :position, :integer
    add_index :property_photos, [:property_id, :position], unique: true
  end
end
