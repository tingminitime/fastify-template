import app from './app.ts'

const PORT = Number.parseInt(process.env.FASTIFY_PORT ?? '3000')

/**
 * Gracefully shutdown the Fastify server.
 */
const listeners = ['SIGINT', 'SIGTERM']
listeners.forEach((signal) => {
  process.on(signal, async () => {
    try {
      await app.close()
      process.exit(0)
    }
    catch (err) {
      app.log.error(err)
      process.exit(1)
    }
  })
})

app.listen({ port: PORT }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
