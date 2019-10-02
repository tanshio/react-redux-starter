import { Dispatch } from 'redux'
import { counterActionCreators } from '../../../store/counter/actions'
import { connect } from 'react-redux'
import { Counter, CounterProps } from '../../../components/parts/Counter'
import { State } from '../../../store'

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (
  state: State,
  { dispatch }: { dispatch: Dispatch }
): CounterProps => ({
  count: state.counter.count,
  onIncrement: () => {
    dispatch(counterActionCreators.increment(1))
  },
})

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter)
