import { Dispatch } from 'redux'
import { counterActionCreators } from '../../../store/counter/actions'
import { connect } from 'react-redux'
import { Counter, CounterProps } from '../../../components/Counter'
import { State } from '../../../store'

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (
  state: State,
  { dispatch }: { dispatch: Dispatch }
): CounterProps => ({
  counter: state.counter.count,
  increment: () => {
    dispatch(counterActionCreators.increment(1))
  },
})

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter)
