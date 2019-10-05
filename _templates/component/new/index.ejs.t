---
to: src/components/atomic/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.tsx
---
<%
 UpperCamelCase = h.inflection.camelize(Name)
 LowerCamelCase = h.inflection.camelize(Name, true)
%>import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const <%= UpperCamelCase %>Wrapper = styled.div`
  background-color: #ccc;
`

export type <%= UpperCamelCase %>Props = {
  <%= LowerCamelCase %>: number
  onIncrement: (n: number) => void
}

export const <%= UpperCamelCase %> = (props: <%= UpperCamelCase %>Props) => {
  const [<%= LowerCamelCase %>, set<%= UpperCamelCase %>] = useState(props.<%= LowerCamelCase %>)
  useEffect(() => {
    set<%= UpperCamelCase %>(props.<%= LowerCamelCase %>)
  }, [props.<%= LowerCamelCase %>])

  const handleClick = useCallback(() => {
    set<%= UpperCamelCase %>(<%= LowerCamelCase %> + 1)
    props.onIncrement(1)
  }, [<%= LowerCamelCase %>, props])

  const yen = useMemo(() => {
    return `${<%= LowerCamelCase %> * 1000}円`
  }, [<%= LowerCamelCase %>])

  return (
    <<%= UpperCamelCase %>Wrapper onClick={handleClick}>
      <%= LowerCamelCase %>-{props.<%= LowerCamelCase %>}
      {<%= LowerCamelCase %>}-{yen}
    </<%= UpperCamelCase %>Wrapper>
  )
}

export default memo(<%= UpperCamelCase %>)
