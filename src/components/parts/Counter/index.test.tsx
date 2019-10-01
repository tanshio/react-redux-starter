import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Counter } from './index'

afterEach(cleanup)

describe('Counter', () => {
  it('increment', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Counter count={2} increment={() => {}} />
    )
    fireEvent.click(getByText(/counter/i))
    expect(getByText(/counter/i)).toHaveTextContent('3')
  })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Counter count={2} increment={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
