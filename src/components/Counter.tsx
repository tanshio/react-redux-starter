import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { increment } from '../store/actions/actions'

export const Counter = (props: any) => {
  console.log(props)
  return <div onClick={props.increment}>counter{props.counter}</div>
}

type State = {
  count: number
}

const mapStateToProps = (state: State) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
const mergeProps = (state: State, { dispatch }: { dispatch: Dispatch }) => ({
  counter: state.count,
  increment: () => {
    dispatch(increment(1))
  },
})

export const ConnectCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Counter)
