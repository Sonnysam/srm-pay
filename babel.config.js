module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // presets: [
    //   "babel-preset-expo",
    //   "module:metro-react-native-babel-preset",
    //   "module:react-native-dotenv",
    // ],
    // plugins: [
    //   [
    //     "module:react-native-dotenv",
    //     {
    //       moduleName: "@env",
    //       path: ".env",
    //     },
    //   ],
    // ],
  };
};
