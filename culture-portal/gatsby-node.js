exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const authorsData = [
    {
      surname: "Kupala",
      name: "Yanka",
    },
    {
      surname: "Kolas",
      name: "Yakub",
    },
  ]
  authorsData.forEach(author => {
    createPage({
      path: `/${author.surname}`,
      component: require.resolve("./src/templates/author-template.js"),
      context: { author },
    })
  })
}
