module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            // This needs to be mirrored in tsconfig.json
            '@components': "./src/components",
            '@assets': "./src/assets/index",
            '@types': "./src/types",
            '@hooks': "./src/hooks",
            '@screens': "/src/screens",
          },
        },
      ],
    ],
  };
};
