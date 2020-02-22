import React from 'react';
import { BigPictureGallery } from "react-bigpicture";

const PhotoGallery = (props) => {
  const { data } = props;
  const arrImages = data.map(obj => {
    return (
      <img
        className="photo-gallery__photo"
        src={obj.link}
        alt="portrait"
        key={obj.link}
      />
    );
  });

  return (
    <>
      <h3>Галерея автора</h3>
      <div className="photo-gallery">
        <BigPictureGallery loop>
          {arrImages}
        </BigPictureGallery>
      </div>
    </>
  );
}

export default PhotoGallery;