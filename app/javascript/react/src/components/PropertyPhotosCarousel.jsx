import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px;
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  margin: 5px;
  cursor: pointer;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const PropertyPhotosCarousel = ({ propertyPhotos }) => {
  const [selectedImage, setSelectedImage] = useState(propertyPhotos[0]);

  return (
    <CarouselContainer>
      <MainImage src={selectedImage.file} alt="Selected" />
      <ThumbnailsContainer>
        {propertyPhotos.map(photo => (
          <Thumbnail
            key={photo.id}
            src={photo.file}
            alt="Thumbnail"
            onClick={() => setSelectedImage(photo)}
          />
        ))}
      </ThumbnailsContainer>
    </CarouselContainer>
  );
};

export default PropertyPhotosCarousel;
