/** @type {import('next').NextConfig} */
// const path = require('path');

const nextConfig = {
    webpack: (config, options) => {
      console.log(options.webpack.version);
      config.module.rules.push({
        test: /\.(pdf|svg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      });
      return config
  },
}

module.exports = nextConfig
