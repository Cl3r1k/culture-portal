const data = require('./src/content/authorsData');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  data.authors.forEach((author) => {
    createPage({
      path: `/${author.surname}`,
      component: require.resolve('./src/templates/author-template.js'),
      context: { author },
    });
  });
};
