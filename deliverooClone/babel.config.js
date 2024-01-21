module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // Remove the expo-router/babel from plugins
    plugins: [
      // List other plugins if you have any
    ],
  };
};
