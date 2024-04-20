import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],

  output: {
    cssModules: {
      auto: (resource) => {
        let bl = resource.indexOf("nexx-test-less") > -1;
        console.log("bl:", bl, resource);
        return bl;
      },
    },
  },

  tools: {
    rspack(config) {
      config.module.parser["css/module"] = {
        namedExports: false,
      };
      config.module.parser["css/auto"] = {
        namedExports: true,
      };
      config.module.parser["css"] = {
        namedExports: true,
      };
      config.experiments.css = true;

      return config;
    },
  },
});
