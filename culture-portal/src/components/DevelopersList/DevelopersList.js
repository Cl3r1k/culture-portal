import React from 'react';
import Developer from '../Developer/Developer';

// constants
const DEVELOPERS = [
  {
    name: 'Andrew Deadline2020',
    nickName: 'Deadline',
    githubUrl: 'https://github.com/deadline2020',
    avatar: 'https://avatars2.githubusercontent.com/u/55108860?s=460&v=4',
    workLog: ['task 1', 'task 2', 'task 3'],
  },
  {
    name: 'Maria Kelbitskaya',
    nickName: 'MariaV',
    githubUrl: 'https://github.com/kelbitskaya',
    avatar: 'https://avatars2.githubusercontent.com/u/47183389?s=460&v=4',
    workLog: ['task 4', 'task 5', 'task 6'],
  },
  {
    name: 'Musmen',
    nickName: 'Musmen',
    githubUrl: 'https://github.com/musmen',
    avatar: 'https://avatars1.githubusercontent.com/u/50077360?s=400&v=4',
    workLog: ['task 7', 'task 8', 'task 9'],
  },
  {
    name: 'Viktoriya Vorozhun',
    nickName: 'niki_night',
    githubUrl: 'https://github.com/ViktoriyaVorozhun',
    avatar: 'https://avatars0.githubusercontent.com/u/42174805?s=400&v=4',
    workLog: ['task 10', 'task 11', 'task 12'],
  },
  {
    name: 'Vladimir',
    nickName: 'Cl3r1k',
    githubUrl: 'https://github.com/cl3r1k',
    avatar: 'https://avatars2.githubusercontent.com/u/20742744?s=460&v=4',
    workLog: ['developers page', 'task 13', 'task 14'],
  },
];

export default () => {

  // console.log('some log in ')
  // console.log('DEVELOPERS: ', DEVELOPERS);
  // console.log('someData: ', someData);

  const renderDevelopersList = developers => developers.map(dev => <Developer {...dev} key={dev.nickName}/>);
  
  return (
    <div className="developer-list">
      {renderDevelopersList(DEVELOPERS)}
    </div>
  );
}