import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css';

const PhotoGallery = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const arrImages = data.map((obj) => ({
    original: obj.link,
    thumbnail: obj.link,
  }));

  return (
    <div className="author-gallery">
      <h3>{t('photo-gallery-header')}</h3>
      <div className="photo-gallery">
        <ImageGallery items={arrImages} showPlayButton={false} />
      </div>
    </div>
  );
};

PhotoGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PhotoGallery;
