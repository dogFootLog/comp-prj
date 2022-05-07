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
        },
      },
    },
  ],
};
