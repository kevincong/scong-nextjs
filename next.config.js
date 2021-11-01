// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    images: {
      handleImages: ['jpg'],
      disableStaticImages: true
    }
  }],
  // your other plugins here
]);
