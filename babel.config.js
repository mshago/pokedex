module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@components": "./src/components",
            "@colors": "./src/assets/colors/colors",
            "@types": "./src/types",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens/index",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
