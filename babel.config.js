module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv',{
        "envName": "APP_ENV",
        "moduleName": "react-native-dotenv",
        "path": ".env",
        "safe": false,
        "allowUndefined": true
    }]]
  };
};
