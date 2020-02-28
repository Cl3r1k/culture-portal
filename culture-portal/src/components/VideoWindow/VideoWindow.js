import './modal-video.min.css';

import React from 'react';
import ModalVideo from 'react-modal-video';
import { withTranslation } from 'react-i18next';

class VideoWindow extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  onClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { t } = this.props;
    const { isOpen } = this.state;
    const { video, about } = this.props;
    const { youtubeId, startTime } = video;

    // TODO: implement translation for 'description'
    const description = `${about}. ${t('video-description')}`;
    const imageURL = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    const options = {
      start: startTime,
      autoplay: 1,
    };

    return (
      <div className="author-video">
        <h3>{description}</h3>
        <button onClick={this.openModal} type="button">
          <img src={imageURL} alt={description} />
        </button>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          youtube={options}
          videoId={youtubeId}
          onClose={this.onClose}
        />
      </div>
    );
  }
}

export default withTranslation()(VideoWindow);
