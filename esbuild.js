const { build } = require("esbuild")

const buildConfig = {
  loader: {
    ".js": "jsx"
  },
  platform: "node",
  jsxFactory: "h",
  jsxFragment: "Fragment",
  minify: true,
  bundle: true,
}

// Server
build({
  ...buildConfig,
  entryPoints: ['./server/server.js'],
  outfile: './build/server.js',
}).catch(() => process.exit(1))

//Client
build({
  ...buildConfig,
  entryPoints: ['./src/index.js'],
  outfile: './dist/bundle.js',
}).catch(() => process.exit(1))