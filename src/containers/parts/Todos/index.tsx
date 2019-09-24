import { Dispatch } from 'redux'
import { todoActionCreators } from '../../../store/todos/actions'
import { connect } from 'react-redux'
import { Todos, TodosProps } from '../../../components/Todos'
import { State } from '../../../store'

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (
  state: State,
  { dispatch }: { dispatch: Dispatch }
): TodosProps => ({
  todos: state.todos.todos,
  onRemove: (index) => {
    dispatch(todoActionCreators.deleteTodo(index))
  },
})

export const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Todos)
