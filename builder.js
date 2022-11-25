const { start } = require("live-server")
const { watch } = require("chokidar")
const { build } = require("esbuild")
const fs = require("fs-extra")
const { sassPlugin } = require("esbuild-sass-plugin")
// const { ScssModulesPlugin } = require("esbuild-scss-modules-plugin")
const isProd = process.env.NODE_ENV === "production"

const serverOptions = {
  port: 8080,
  root: "./dist",
  open: true,
}
const buildOptions = {
  entryPoints: ["App.tsx"],

  loader: { ".ts": "tsx" },
  bundle: true,
  outdir: "dist",
  format: "cjs",
  minify: isProd,
  sourcemap: true,
  incremental: true,
  plugins: [sassPlugin()],
}

;(async () => {
  fs.remove("dist")
  fs.copy("public", "dist")

  let builder
  try {
    builder = await build(buildOptions)
  } catch (e) {
    console.warn(e.message)
  }
  if (!isProd) {
    watch("src/**/*", { ignoreInitial: true }).on("all", () => {
      try {
        builder.rebuild()
      } catch (e) {
        console.warn(e.message)
      }
    })
    start(serverOptions)
  } else {
    process.exit(0)
  }
})()
