import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const PhotoGallery = (props) => {
  const { data } = props;
  const arrImages = data.map(obj => {
    return (
      {
        original: obj.link,
        thumbnail: obj.link,
      }
    );
  });

  return (
    <div className="author-gallery">
      <h3>Галерея автора</h3>
      <div className="photo-gallery">
        <ImageGallery
          items={arrImages}
          showPlayButton={false}
        />
      </div>
    </div>
  );
}

export default PhotoGallery;
