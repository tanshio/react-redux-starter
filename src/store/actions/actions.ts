export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'

export const increment = (payload: number) =>
  ({
    type: 'increment',
    payload,
  } as const)

export const decrement = (payload: number) =>
  ({
    type: 'decrement',
    payload,
  } as const)

export const typo2 = (payload: number) =>
  ({
    type: 'typo2',
    payload,
  } as const)

export const typo = (payload: string) =>
  ({
    typo: 'typo',
    payload,
  } as const)
