const path = require('path')
const webpack = require('webpack')
const StylelintPlugin = require('stylelint-webpack-plugin')
const GitRersionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRersionPlugin()

const version = require('./package.json').version
const timeStamp = new Date().toUTCString()

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuestic-ui',
    'epic-spinners',
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/app/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Vuestic Admin',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      },
      plugins: [
        new StylelintPlugin({
          files: ['src/**/*.{vue,htm,html,css,sss,less,scss}'],
        }),
        new webpack.DefinePlugin({
          __VERSION__: JSON.stringify(version),
          __TIMESTAMP__: JSON.stringify(timeStamp),
          __COMMIT__: JSON.stringify(gitRevisionPlugin.version()),
        }),
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // Preload vuestic-ui variables and mixins for every component
        data: `@import "~vuestic-ui/src/components/vuestic-sass/resources/resources.scss";`,
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
      importWorkboxFrom: 'local',
    },
  },
}
