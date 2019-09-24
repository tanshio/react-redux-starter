import { ActionType } from '../types'
import { TodosState } from './reducers'

export const TODO_ADD = 'TODO_ADD'
export const TODO_DELETE = 'TODO_DELETE'

const addTodo = (payload: TodosState['todos']) =>
  ({
    type: TODO_ADD,
    payload,
  } as const)

const deleteTodo = (payload: number) =>
  ({
    type: TODO_DELETE,
    payload,
  } as const)

export const todoActionCreators = {
  addTodo,
  deleteTodo,
}

export type TodoActionTypes = ActionType<typeof todoActionCreators>
