import { Type } from '@sinclair/typebox'
import type { DeepReadonly } from 'ts-essentials'

const responseOK = Type.Object({
  success: Type.Boolean(),
  message: Type.Optional(Type.String()),
})

export const BasicResponseSchema = {
  ResponseOK: responseOK as DeepReadonly<typeof responseOK>,
}
