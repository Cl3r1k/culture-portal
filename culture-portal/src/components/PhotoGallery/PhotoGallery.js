import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css'

const PhotoGallery = (props) => {
  const { data } = props;
  const { t } = useTranslation();
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
      <h3>{t('photo-gallery-header')}</h3>
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
