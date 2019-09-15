import { Dispatch } from 'redux'
import { counterActionCreators } from '../../../store/counter/actions'
import { connect } from 'react-redux'
import {
  Counter,
  CounterProps,
  CounterState,
} from '../../../components/Counter'

const mapStateToProps = (state: CounterState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (
  state: CounterState,
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
