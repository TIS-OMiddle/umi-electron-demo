import { defineConfig } from 'umi';
import { Configuration } from 'webpack';
import { resolve } from 'path';

export default defineConfig({
  routes: [{ path: '/', component: '@/pages/index' }],
  alias: {
    '@/common': resolve(__dirname, '../common'),
  },
  extraBabelPlugins: [
    ["import", { "libraryName": "lodash", "libraryDirectory": "" }]
  ],
  electronBuilder: {
    mainWebpackConfig(config: Configuration) {
      config.resolve!.alias = {
        '@/common': resolve(__dirname, '../common'),
        '@': resolve(__dirname, '../main'),
      };
    },
  },
});
