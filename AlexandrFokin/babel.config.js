module.exports = function (api) {
  api.cache(true);
  const presets = [
    ['@babel/preset-env', {
      targets: {
        edge: '17',
        firefox: '62',
        chrome: '69',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
    }],
    ['@babel/preset-react', {
      development: process.env.BABEL_ENV === 'development',
    }]
  ];
  const plugins = [
    ['transform-class-properties'],
  ];

  return {
    presets,
    plugins
  };
};