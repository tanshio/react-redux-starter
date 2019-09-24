import produce from 'immer'
import { TodoActionTypes, TODO_ADD, TODO_DELETE } from './actions'

type TodoItem = {
  title: string
}

export type TodosState = {
  todos: TodoItem[]
}

export const todos = produce(
  (draft: TodosState = { todos: [] }, action: TodoActionTypes): TodosState => {
    switch (action.type) {
      case TODO_ADD:
        draft.todos.push({ title: 'test2' })
        return draft
      case TODO_DELETE:
        draft.todos.splice(action.payload, 1)
        return draft
      default:
        return draft
    }
  }
)
