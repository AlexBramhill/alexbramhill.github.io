import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import * as path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import {tanstackRouter} from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        babel({presets: [reactCompilerPreset()]}),
        tailwindcss(),
    ],
    resolve: {
        alias: {"@": path.resolve(__dirname, "./src") },
  },
});
