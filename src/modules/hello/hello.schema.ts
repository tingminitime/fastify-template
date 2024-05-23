import { Type } from '@sinclair/typebox'
import type { DeepReadonly } from 'ts-essentials'

/**
 * AJV way
 *
 * @see https://github.com/ajv-validator/ajv
 */
// const helloSchema = {
//   type: 'object',
//   nullable: true,
//   properties: {
//     name: {
//       type: 'string',
//     },
//   },
// }

/**
 * TypeBox way
 *
 * @see https://github.com/sinclairzx81/typebox
 */
const helloSchema = Type.Object({
  name: Type.Optional(Type.String()),
})

export const HelloSchema: DeepReadonly<typeof helloSchema> = helloSchema
