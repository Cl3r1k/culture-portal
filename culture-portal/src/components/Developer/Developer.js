import React from 'react';

export default (props) => {
  const { name, nickName, githubUrl, avatar, workLog } = props;
  return (
    <div className="developer-card">
      <div>{name}</div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">{nickName}</a>
      <img src={avatar} alt="avatar"></img>      
      <div>{workLog}</div>
    </div>
  );
}