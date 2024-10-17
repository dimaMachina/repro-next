import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

/** @type {import('next').NextConfig} */
export default {
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.mdx': {
  //         loaders: [require.resolve('./test-loader.js')],
  //         as: '*.js'
  //       }
  //     }
  //   }
  // },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [options.defaultLoaders.babel, {
        loader: require.resolve('./test-loader.js')
      }]
    })
    return config
  }
}
