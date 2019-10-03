import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const helloWrapper = styled.div`
  background-color: #ccc;
`

export type helloProps = {
  hello: number
  onIncrement: (n: number) => void
}

export const hello = (props: helloProps) => {
  const [hello, sethello] = useState(props.hello)
  useEffect(() => {
    sethello(props.hello)
  }, [props.hello])

  const handleClick = useCallback(() => {
    sethello(hello + 1)
    props.onIncrement(1)
  }, [hello, props])

  const yen = useMemo(() => {
    return `${hello * 1000}円`
  }, [hello])

  return (
    <helloWrapper onClick={handleClick}>
      hello-{props.hello}
      {hello}-{yen}
    </helloWrapper>
  )
}

export default memo(hello)

