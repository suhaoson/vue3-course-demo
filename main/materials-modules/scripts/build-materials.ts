// scripts/build-materials.ts
import { build } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import pluginVueJsx from "@vitejs/plugin-vue-jsx";
import { resolvePackagePath, readFile } from "./util";
import type { InlineConfig } from "vite";

function getBuildConfig(opts: {
  name: string;
  version: string;
  dirName: string;
  libName: string;
}): InlineConfig {
  const { dirName, libName } = opts;
  const config: InlineConfig = {
    plugins: [pluginVue(), pluginVueJsx()],
    build: {
      target: "esnext",
      minify: false,
      emptyOutDir: true,
      outDir: resolvePackagePath(dirName, "dist"),
      lib: {
        name: libName,
        entry: resolvePackagePath(dirName, "src", "index.ts"),
        formats: ["es", "cjs", "iife"],
        fileName: (format) => {
          if (format === "es") {
            format = "esm";
          }
          return `index.${format}.js`;
        },
      },
      rollupOptions: {
        preserveEntrySignatures: "strict",
        external: ["vue", "@vue/components"],
        output: {
          globals: {
            vue: "Vue",
            "@vue/components": "MyVueComponents",
          },
          assetFileNames: "index[extname]",
        },
      },
    },
  };
  return config;
}

function getBuildAMDConfig(opts: {
  name: string;
  version: string;
  dirName: string;
  libName: string;
}): InlineConfig {
  const { dirName, name, libName } = opts;
  const config: InlineConfig = {
    plugins: [pluginVue(), pluginVueJsx()],
    build: {
      // target: 'esnext',
      minify: false,
      emptyOutDir: false,
      outDir: resolvePackagePath(dirName, "dist"),
      lib: {
        name: libName,
        entry: resolvePackagePath(dirName, "src", "index.ts"),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        formats: ["amd"],
        fileName: () => {
          return "index.amd.js";
        },
      },
      rollupOptions: {
        preserveEntrySignatures: "strict",
        external: ["vue", "@vue/components"],
        output: {
          name: name,
          format: "amd",
          amd: {
            id: name,
          },
          globals: {
            vue: "vue",
            "@vue/components": "@vue/components",
          },
          assetFileNames: "index.amd[extname]",
        },
      },
    },
  };
  return config;
}

async function main() {
  console.log("执行物料编译...");
  const materialList = [
    {
      name: require("../packages/material-product-list/package.json").name,
      version: require("../packages/material-product-list/package.json")
        .version,
      dirName: "material-product-list",
      libName: "MyMaterialProdcutList",
    },
    {
      name: require("../packages/material-banner-slides/package.json").name,
      version: require("../packages/material-banner-slides/package.json")
        .version,
      dirName: "material-banner-slides",
      libName: "MyMaterialBannerSlides",
    },
  ];
  for (const opts of materialList) {
    console.log(`开始编译物料 ${opts.dirName}`);
    const config = getBuildConfig(opts);
    const configAMD = getBuildAMDConfig(opts);
    await build(config);
    await build(configAMD);
  }
}

main();
