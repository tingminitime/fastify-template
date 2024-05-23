import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import app from '@/app.ts'

/**
 * @see https://github.com/fastify/fastify-autoload/issues/366
 */

describe('say hello', () => {
  beforeEach(async () => {
    await app.ready()
  })

  afterEach(async () => {
    await app.close()
  })

  it('get /api/hello', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/hello',
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({
      success: true,
      message: 'Hello, stranger!',
    })
  })
})
