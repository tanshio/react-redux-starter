import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const SayhelloWrapper = styled.div`
  background-color: #ccc;
`

export type SayhelloProps = {
  sayhello: number
  onIncrement: (n: number) => void
}

export const sayHello = (props: sayHelloProps) => {
  const [sayhello, setSayhello] = useState(props.sayhello)
  useEffect(() => {
    setSayhello(props.sayhello)
  }, [props.sayhello])

  const handleClick = useCallback(() => {
    setSayhello(sayhello + 1)
    props.onIncrement(1)
  }, [sayhello, props])

  const yen = useMemo(() => {
    return `${sayhello * 1000}円`
  }, [sayhello])

  return (
    <sayHelloWrapper onClick={handleClick}>
      sayhello-{props.sayhello}
      {sayhello}-{yen}
    </sayHelloWrapper>
  )
}

export default memo(sayHello)

