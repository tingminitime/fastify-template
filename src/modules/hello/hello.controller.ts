import type { FastifyReply, FastifyRequest } from 'fastify'

function getHello(
  req: FastifyRequest<{
    Querystring: { name?: string }
    Params: { name?: string }
  }>,
  reply: FastifyReply,
) {
  if (req.query.name) {
    req.log.info('Hello, %s', req.query.name)
    reply
      .code(200)
      .send({
        success: true,
        message: `Hello, ${req.query.name}`,
      })

    return
  }

  if (req.params.name) {
    req.log.info('Hello, %s', req.params.name)
    reply
      .code(200)
      .send({
        success: true,
        message: `Hello, ${req.params.name}`,
      })

    return
  }

  reply.code(200).send({
    success: true,
    message: 'Hello, stranger!',
  })
}

function postHello(
  req: FastifyRequest<{ Body: { name?: string } }>,
  reply: FastifyReply,
): void {
  reply
    .code(201)
    .send({
      success: true,
      message: `Hello, ${req.body.name ?? 'stranger'}`,
    })
}

export const AutoHelloController = {
  getHello,
  postHello,
}
