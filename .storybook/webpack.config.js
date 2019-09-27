module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      // require.resolve('ts-loader'),
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      // {
      //   loader: require.resolve('react-docgen-typescript-loader'),
      // },
      // {
      //   loader: require.resolve('@storybook/addon-storysource/loader'),
      //   options: { parser: 'typescript' }
      // }
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}

// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     use: [
//       {
//         loader: require.resolve('ts-loader'),
//       },
//       // Optional
//       {
//         loader: require.resolve('react-docgen-typescript-loader'),
//       },
//     ],
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };
