import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Counter } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Counter',
  component: Counter,
  decorators: [withKnobs, withA11y],
  parameters: {
    componentSubtitle: 'Handy status label',
  },
}

export const Primary = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
    action('onIncrement')(count + 1)
  }
  return <Counter count={count} onIncrement={increment} />
}

export const Secondary = () => (
  <Counter count={3} onIncrement={() => action('onIncrement')} />
)
