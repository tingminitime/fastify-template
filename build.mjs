import { glob } from 'glob'
import esbuild from 'esbuild'
import esbuildPluginPino from 'esbuild-plugin-pino'

const entryPoints = glob.sync(
  'src/**/*.ts',
  { ignore: ['src/**/*.{test,spec}.ts'] },
)

function build() {
  console.log('Bundling entry points in `/src` directory:', entryPoints)
  console.log('Building...')
  esbuild.build({
    entryPoints,
    outdir: `./dist`,
    bundle: true,
    minify: false,
    sourcemap: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    logLevel: 'info',
    packages: 'external',
    color: true,
    plugins: [
      esbuildPluginPino({
        transports: ['pino-pretty'],
      }),
    ],
  }).catch(() => process.exit(1))
}

build()
