class PropertyPhoto < ApplicationRecord
  include ImageUploader::Attachment(:file)
  belongs_to :property
end
