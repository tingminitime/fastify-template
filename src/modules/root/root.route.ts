import type { FastifyPluginAsync } from 'fastify'
import { RootController } from './root.controller.ts'

const RootRoute: FastifyPluginAsync = async (app, _opts): Promise<void> => {
  app.get(
    '/',
    RootController.getIndex,
  )
}

export const prefix = '/api'
export default RootRoute
