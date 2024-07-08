import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "EmojiPicker",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@nextui-org/react",
        "framer-motion",
      ],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "jsxRuntime",
          "@nextui-org/react": "react$1",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      compilerOptions: {
        jsx: 4,
      },
    }),
  ],
});
