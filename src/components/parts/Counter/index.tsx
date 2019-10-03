import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const CounterWrapper = styled.div`
  background-color: #ccc;
`

export type CounterProps = {
  count: number
  onIncrement: (n: number) => void
}

export const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.count)
  useEffect(() => {
    setCount(props.count)
  }, [props.count])

  const handleClick = useCallback(() => {
    setCount(count + 1)
    props.onIncrement(1)
  }, [count, props])

  const yen = useMemo(() => {
    return `${count * 1000}円`
  }, [count])

  return (
    <CounterWrapper onClick={handleClick}>
      counter-{props.count}
      {count}-{yen}
    </CounterWrapper>
  )
}

export default memo(Counter)
