---
to: src/components/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.tsx
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
 Capitalize = h.inflection.camelize(Name)
%>import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const <%= Capitalize %>Wrapper = styled.div`
  background-color: #ccc;
`

export type <%= Capitalize %>Props = {
  <%= LowerCase %>: number
  onIncrement: (n: number) => void
}

export const <%= Name %> = (props: <%= Name %>Props) => {
  const [<%= LowerCase %>, set<%= Capitalize %>] = useState(props.<%= LowerCase %>)
  useEffect(() => {
    set<%= Capitalize %>(props.<%= LowerCase %>)
  }, [props.<%= LowerCase %>])

  const handleClick = useCallback(() => {
    set<%= Capitalize %>(<%= LowerCase %> + 1)
    props.onIncrement(1)
  }, [<%= LowerCase %>, props])

  const yen = useMemo(() => {
    return `${<%= LowerCase %> * 1000}円`
  }, [<%= LowerCase %>])

  return (
    <<%= Name %>Wrapper onClick={handleClick}>
      <%= LowerCase %>-{props.<%= LowerCase %>}
      {<%= LowerCase %>}-{yen}
    </<%= Name %>Wrapper>
  )
}

export default memo(<%= Name %>)

