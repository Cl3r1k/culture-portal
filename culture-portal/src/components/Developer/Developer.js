import React from 'react';

const Developer = ({
  content: {
    name,
    nickName,
    description: {
      description,
    },
    avatar: {
      file: {
        url,
      }
    },
    githubUrl: {
      githubUrl,
    },
    contribution: {
      contribution,
    }
  }
}) => {

  return (
    <div className="developer-card">
      <h2>{name}</h2>
      <img src={url} alt={nickName}></img>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">{nickName}</a>
      <p>{description}</p>
      <div>
        Contribution info:
        {contribution}
      </div>
    </div>
  );
}

export default Developer;