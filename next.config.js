// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    handleImages: ['jpg', 'png'],
    disableStaticImages: true,
    optimizeImages: true,
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],

  // your other plugins here
]);

module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './public/loader.js',
  },
}
