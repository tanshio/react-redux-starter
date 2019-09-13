import { ActionType } from './types'

export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'

const increment = (payload: number) =>
  ({
    type: INCREMENT_COUNT,
    payload,
  } as const)

const decrement = (payload: number) =>
  ({
    type: DECREMENT_COUNT,
    payload,
  } as const)

export const counterActionCreators = {
  increment,
  decrement,
}

export type Action = ActionType<typeof counterActionCreators>
