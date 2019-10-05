---
to: src/store/<%= h.inflection.camelize(Name, true) %>/reducers.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
 LowerCamelCase = h.inflection.camelize(Name, true)
 UpperCamelCase = h.inflection.camelize(Name)
%>import produce from 'immer'
import { <%= UpperCamelCase %>ActionTypes } from './actions'
import { <%= UpperCase %>_DECREMENT, <%= UpperCase %>_INCREMENT } from './actions'

export type <%= UpperCamelCase %>State = {
  <%= LowerCamelCase %>: number
}

export const <%= LowerCamelCase %> = produce(
  (
    draft: <%= UpperCamelCase %>State = { <%= LowerCamelCase %>: 0 },
    action: <%= UpperCamelCase %>ActionTypes
  ): <%= UpperCamelCase %>State => {
    switch (action.type) {
      case <%= UpperCase %>_INCREMENT:
        draft.<%= LowerCamelCase %> = draft.<%= LowerCamelCase %> + action.payload
        return draft
      case <%= UpperCase %>_DECREMENT:
        draft.<%= LowerCamelCase %> = draft.<%= LowerCamelCase %> - action.payload
        return draft
      default:
        return draft
    }
  }
)
