import React, { memo, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
  background-color: #ccc;
`

export type CounterProps = {
  count: number
  increment: (n: number) => void
  sync?: boolean
}

export const Counter = (props: CounterProps) => {
  const [c, setC] = useState(props.count)
  useEffect(() => {
    setC(props.count)
  }, [props.count])

  const increment = useCallback(() => {
    setC(c + 1)
    props.increment(1)
  }, [c, props])

  return (
    <CounterWrapper onClick={increment}>
      counter-{props.count}
      {c}
    </CounterWrapper>
  )
}

export default memo(Counter)
