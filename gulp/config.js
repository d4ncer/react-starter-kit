var dest = './app/build';
var src = './app/src';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  sass: {
    src: src + '/styles/**/*.scss',
    dest: dest
  },
  browserify: {
    bundleConfigs: [{
      entries: src + '/js/app.jsx',
      dest: dest,
      outputName: 'app.js'
    }]
  },
  markup: {
    src: src + '/htdocs/**',
    dest: dest
  }
};