import React from 'react';
import { BigPictureGallery } from "react-bigpicture";

const PhotoGallery = (props) => {
  const { data } = props;
  const arrImages = data.map(obj => {
    return (
      <img
        className="photo-gallery__photo"
        src={obj.link}
        alt="photo"
        key={obj.link}
      />
    );
  });

  return (
    <div className="photo-gallery">
      <BigPictureGallery loop>
        {arrImages}
      </BigPictureGallery>
    </div>
  );
}

export default PhotoGallery;