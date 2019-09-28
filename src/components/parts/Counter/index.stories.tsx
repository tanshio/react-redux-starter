import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Counter } from './'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'

declare module '@storybook/addon-console'

export default {
  title: 'Counter',
  component: Counter,
  decorators: [
    withKnobs,
    withA11y,
    (storyFn: any, context: any) => withConsole()(storyFn)(context),
  ],
  parameters: {
    componentSubtitle: 'Handy status label',
  },
}

export const Primary = () => {
  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
    action('onIncrement')(count + 1)
    console.log('increment')
  }
  return <Counter count={count} increment={increment} />
}

export const Log = () => (
  <Counter
    count={3}
    increment={() => {
      console.log('log')
    }}
  />
)
