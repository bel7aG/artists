/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })

  if (stage === 'build-javascript') {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false
    })
  }

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /slick-carousel/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/`) {
    page.matchPath = `/*`
    createPage(page)
  }
}
