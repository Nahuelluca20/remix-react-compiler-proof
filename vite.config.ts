import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getLoadContext } from './load-context';
import babel from "vite-plugin-babel";

const ReactCompilerConfig = {
  compilationMode: "annotation",
};


export default defineConfig({
	plugins: [
		remixCloudflareDevProxy({ getLoadContext }),
		remix(),
		tsconfigPaths(),
		babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
	],
});
