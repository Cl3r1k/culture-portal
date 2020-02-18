import './modal-video.min.css';

import React from 'react';
import ModalVideo from 'react-modal-video';

class VideoWindow extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  onClose() {
    this.setState({ isOpen: false });
  }

  render() {
    let { isOpen } = this.state;
    const { video, about } = this.props;
    const { youtubeId, startTime } = video;

    const description = `${about}. Видеорепортаж о жизни и творчестве`;
    const imageURL = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    const options = {
      start: startTime,
      autoplay: 1,
    };

    return (
      <div>
        <h3>{description}</h3>
        <img 
          src={imageURL} 
          alt={description}
          onClick={this.openModal} 
        />
        <ModalVideo 
          channel='youtube' 
          isOpen={isOpen} 
          youtube={options}
          videoId={youtubeId} 
          onClose={this.onClose}
        />
      </div>
    )
  }
}

export default VideoWindow;