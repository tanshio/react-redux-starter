---
to: src/store/<%= Name.toLowerCase() %>/actions.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
%>import { ActionType } from '../types'
import { <%= Name %>State } from './reducers'

export const <%= UpperCase %>_INCREMENT = '<%= UpperCase %>'
export const <%= UpperCase %>_DECREMENT = '<%= UpperCase %>'

const increment = (payload: <%= Name %>State['<%= LowerCase %>']) =>
  ({
    type: <%= UpperCase %>_INCREMENT,
    payload,
  } as const)

const decrement = (payload: <%= Name %>State['<%= LowerCase %>']) =>
  ({
    type: <%= UpperCase %>_DECREMENT,
    payload,
  } as const)

export const <%= LowerCase %>ActionCreators = {
  increment,
  decrement,
}

export type <%= Name %>ActionTypes = ActionType<typeof <%= LowerCase %>ActionCreators>
