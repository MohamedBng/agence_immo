class RemovePhotoDataFromProperties < ActiveRecord::Migration[7.0]
  def change
    remove_column :properties, :photos_data
  end
end
