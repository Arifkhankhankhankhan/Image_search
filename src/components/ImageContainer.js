import React from 'react';

function ImageContainer({ images }) {
  return (
    <div className="img-container">
      {images.map((image) => (
        <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
      ))}
    </div>
  );
}

export default ImageContainer;
