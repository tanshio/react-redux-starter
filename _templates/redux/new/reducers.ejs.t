---
to: src/store/<%= Name.toLowerCase() %>/reducers.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
%>import produce from 'immer'
import { <%= Name %>ActionTypes } from './actions'
import { <%= UpperCase %>_DECREMENT, <%= UpperCase %>_INCREMENT } from './actions'

export type <%= Name %>State = {
  <%= LowerCase %>: number
}

export const <%= LowerCase %> = produce(
  (
    draft: <%= Name %>State = { <%= LowerCase %>: 0 },
    action: <%= Name %>ActionTypes
  ): <%= Name %>State => {
    switch (action.type) {
      case <%= UpperCase %>_INCREMENT:
        draft.<%= LowerCase %> = draft.<%= LowerCase %> + action.payload
        return draft
      case <%= UpperCase %>_DECREMENT:
        draft.<%= LowerCase %> = draft.<%= LowerCase %> - action.payload
        return draft
      default:
        return draft
    }
  }
)
