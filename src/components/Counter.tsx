import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { counterActionCreators } from '../store/counter/actions'

export const Counter = (props: any) => {
  console.log(props, 'props')
  const [c, setC] = useState(props.counter)
  useEffect(() => {
    setC(props.counter)
  }, [props.counter])
  return (
    <div onClick={props.increment}>
      countersss-{props.counter}
      {c}
    </div>
  )
}

type State = {
  counter: {
    count: number
  }
}

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }) => ({
  counter: state.counter.count,
  increment: () => {
    dispatch(counterActionCreators.increment(1))
  },
})

export const ConnectCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter)
