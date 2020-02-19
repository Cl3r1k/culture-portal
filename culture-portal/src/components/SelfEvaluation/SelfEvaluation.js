import React from 'react';

const SelfEvaluation = () => {

  return (
    <div>
      <h3>Self evaluation:</h3>

      <h4>Maximum points - **240**</h4>

      <h4>Min scope - **50**</h4>
      <ul>
        <li>**10** Main page + page with a list of authors + author's page (only pages with content without widgets);</li>
        <li>**10** Page with team members + page with worklog</li>
        <li>**10** Page with list of authors contains search widget;</li>
        <li>**20** Portal has two languages;</li>
      </ul>

      <h4>Normal scope - **140**</h4>
      <ul>
        <li>**20** Portal has page with styleguide;</li>
        <li>**10** Mobile version is okey</li>
        <li>**10** Ipad/tablet version is okey</li>
        <li>**10** Author's page contains timeline;</li>
        <li>**10** Author's page contains video overlay;</li>
        <li>**20** Author's page contains photo gallery;</li>
        <li>**10** Author's page contains map (geowidget);</li>
        <li>**from 0 to 20** Design (typography, icons, colors, links + buttons + input are styled)</li>
        <li>**20** Material-ui / bootstrap is used</li>
        <li>**10** Portal has third language;</li>
      </ul>

      <h4>Extra scope - **70**</h4>
      <ul>
        <li>**10** Confidence of the project presentation;</li>
        <li>**10** Project is made using gatsbyjs;</li>
        <li>**10** Contentful / netlify cms is used for content management</li>
        <li>**20** Animations / special effects like paralax </li>
        <li>**up to 20** Outstanding design;</li>
        <li>**20** Storybook/styleguidist/other react styleguide tool usage for the page with styles</li>
      </ul>
    </div>
  );
}

export default SelfEvaluation;