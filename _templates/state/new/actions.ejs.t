---
to: src/store/<%= h.inflection.camelize(Name, true) %>/actions.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
 LowerCamelCase = h.inflection.camelize(Name, true)
 UpperCamelCase = h.inflection.camelize(Name)
%>import { ActionType } from '../types'
import { <%= UpperCamelCase %>State } from './reducers'

export const <%= UpperCase %>_INCREMENT = '<%= UpperCase %>'
export const <%= UpperCase %>_DECREMENT = '<%= UpperCase %>'

const increment = (payload: <%= UpperCamelCase %>State['<%= LowerCamelCase %>']) =>
  ({
    type: <%= UpperCase %>_INCREMENT,
    payload,
  } as const)

const decrement = (payload: <%= UpperCamelCase %>State['<%= LowerCamelCase %>']) =>
  ({
    type: <%= UpperCase %>_DECREMENT,
    payload,
  } as const)

export const <%= LowerCamelCase %>ActionCreators = {
  increment,
  decrement,
}

export type <%= UpperCamelCase %>ActionTypes = ActionType<typeof <%= LowerCamelCase %>ActionCreators>
