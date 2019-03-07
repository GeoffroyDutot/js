//bundle.config.js
module.exports = {
    bundle: {
      main: {
        scripts: [
          './js/*.js',

        ],
        styles: [
        './css/*.css',

        ],
      },
      vendor: {
        scripts: './bower_components/angular/angular.js'
      }
    },
    copy: './content/**/*.{png,svg}'
  };