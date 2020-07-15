const who = 'World'
console.log(`Hello ${who}`)

module.exports = {
    entry:  './source/app.js',
    output: {
      filename: './dist/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }
/* All it says is:
Hey webpack: get the file source/app.js, resolve all of it’s dependencies (that is if this file wants to include any other ones), and spit out dist/bundle.js. Oh, and if you see any file with .js extension — translate it with Babel. Thanks. */