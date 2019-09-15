import React, { useCallback, useEffect, useState } from 'react'

export type CounterProps = {
  counter: number
  increment: (n: number) => void
}

export const Counter = React.memo((props: CounterProps) => {
  const [c, setC] = useState(props.counter)
  useEffect(() => {
    setC(props.counter)
  }, [props.counter])

  const increment = useCallback(() => {
    setC(1)
    props.increment(1)
  }, [props])

  return (
    <div onClick={increment}>
      counterss-{props.counter}
      {c}
    </div>
  )
})

export type CounterState = {
  counter: {
    count: number
  }
}
