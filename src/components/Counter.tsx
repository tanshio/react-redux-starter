import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
  background-color: #ccc;
`

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
    <CounterWrapper onClick={increment}>
      counter-{props.counter}
      {c}
    </CounterWrapper>
  )
})

export type CounterState = {
  counter: {
    count: number
  }
}
