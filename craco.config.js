const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@/routes": "./src/routes",
          "@/component": "./src/component",
          "@/pages": "./src/pages",
          "@/layouts": "./src/layouts",
          "@/hook": "./src/utils/hook",
          "@/redux": "./src/utils/redux",
        },
      },
    },
  ],
};
