import { promises } from 'node:fs'
import { URL, fileURLToPath } from 'node:url'
import type { FastifyReply, FastifyRequest } from 'fastify'

const { readFile } = promises

async function getIndex(
  req: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const indexHtmlPath = fileURLToPath(new URL('../../../static/index.html', import.meta.url))

  const indexHtmlContent = await readFile(indexHtmlPath)
  reply
    .header('Content-Type', 'text/html; charset=utf-8')
    .send(indexHtmlContent)
}

export const RootController = {
  getIndex,
}
