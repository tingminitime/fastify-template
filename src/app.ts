import fastify from 'fastify'
import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { registerCorsProvider } from './providers/cors.ts'
import { registerAutoloadProvider } from './providers/autoload.ts'

/**
 * Load environment variables from the `.env` file
 */
import 'dotenv/config'

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid, hostname',
      },
    },
  },
  production: true,
  test: false,
}

/**
 * Create a Fastify instance
 */
const app = await fastify({
  logger: envToLogger[process.env.NODE_ENV] ?? true,
  ignoreTrailingSlash: true,
}).withTypeProvider<TypeBoxTypeProvider>()

/**
 * Register providers
 */
registerCorsProvider(app) // Cors
registerAutoloadProvider(app) // Autoload

/**
 * Error handler
 */
app.setNotFoundHandler((_request, reply) => {
  reply.code(404).send({ message: 'Not Found' })
})

export default app
