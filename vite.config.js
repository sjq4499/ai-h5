// import { fileURLToPath, URL } from 'node:url'//vite3

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd());
  console.log(mode, env);
  return {
    base: env.VITE_APP_BASE_API, // 打包路径
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        // '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "./src/style/index.scss";',
        },
      },
    },
    build: {
      outDir: 'dist', //输入文件夹
      assetsDir: 'assets', //静态资源目录
      cssCodeSplit: true, //启用/禁用 CSS 代码拆分
      sourcemap: mode === 'producion', //是否生产source Map源码
      chunkSizeWarningLimit: 1000, // 大小警告的限制(以 kbs 为单位)
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
      // terserOptions: {
      //   compress: {
      //     drop_console: true, // 生产环境禁用console
      //     drop_debugger: true, //生产环境调试器
      //   },
      // },
    },
    server: {
      host: '0.0.0.0',
    },
  };
});
