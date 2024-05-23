import cors from '@fastify/cors'
import type { FastifyInstance } from 'fastify'
import type { FastifyCorsOptions } from '@fastify/cors'

const corsOptions: FastifyCorsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'],
  credentials: true,
}

export function registerCorsProvider(app: FastifyInstance) {
  app.register(cors, corsOptions)
}
