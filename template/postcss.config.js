module.exports = {
  plugins: [
    require('rucksack-css')(),
    require('autoprefixer')({
      browsers: ['last 2 version', 'ie 9']
    })
  ]
  //  plugins: [
  //   require('postcss-smart-import')({ /* ...options */ }),
  //   require('precss')({ /* ...options */ }),
  //   require('autoprefixer')({ /* ...options */ })
  // ]
};
