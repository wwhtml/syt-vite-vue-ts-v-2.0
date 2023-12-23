import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// console.log(import.meta.env);

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const viteEnv = loadEnv(mode, process.cwd());
  console.log(viteEnv);
  const { VITE_BASE_URL, VITE_BASE_API_TARGET, VITE_BASE_API, VITE_APP_TITLE, VITE_DIST_PATH } =
    viteEnv;
  return defineConfig({
    base: VITE_BASE_URL,
    plugins: [
      vue(),
      vueJsx(),
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router", "pinia"],
        dirs: [/* "src/utils/**" */ "src/stores/**"],
        dts: "./src/auto-imports.d.ts", // 默认是：'./auto-imports.d.ts'
        eslintrc: {
          enabled: true //
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: "./src/components.d.ts"
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        //配置scss
        scss: {
          //引入多个文件（注意字符串中不要有空格）
          additionalData: `@import "@/assets/styles/variables.scss";@import "@/assets/styles/mixins.scss";`
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 9999,
      // open: true
      proxy: {
        [`${VITE_BASE_API}`]: {
          target: VITE_BASE_API_TARGET,
          ws: true,
          // 是否允许跨域
          changeOrigin: true
        }
      }
      // proxy: {
      //   [`${VITE_BASE_API}`]: {
      //     target: VITE_BASE_API_TARGET,
      //     ws: true,
      //     // 是否允许跨域
      //     changeOrigin: true
      // rewrite: (path) => path.replace(`${VITE_BASE_API}`, "")
      //   }
      // }
    },
    build: {
      outDir: VITE_DIST_PATH
    },
    preview: {
      port: 8080
    }
  });
};
