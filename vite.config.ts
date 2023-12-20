import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/syt-vue3-vite-ts-2.0/",
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
    open: true
    // proxy: {
    //   "/api": {
    //     target: "http://syt.atguigu.cn",
    //     changeOrigin: true
    //   }
    // }
  }
});
