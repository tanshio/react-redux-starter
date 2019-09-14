import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { counterActionCreators } from '../store/counter/actions'

export const Counter = (props: any) => {
  const [c, setC] = useState(props.counter)
  useEffect(() => {
    setC(props.counter)
  }, [props.counter])
  return (
    <div onClick={props.increment}>
      counters{props.counter}
      {c}
    </div>
  )
}

type State = {
  count: number
}

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }) => ({
  counter: state.count,
  increment: () => {
    dispatch(counterActionCreators.increment(1))
  },
})

export const ConnectCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter)
