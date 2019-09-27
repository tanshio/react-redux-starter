import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { Counter } from './'
import { withA11Y } from '@storybook/addon-a11y'

export default {
  title: 'Counter',
  component: Counter,
  decorators: [withKnobs, withA11Y],
  parameters: {
    componentSubtitle: 'Handy status label',
  },
}

export const primary = () => (
  <Counter counter={number('count', 1)} increment={action('increment')} />
)

export const primary2 = () => (
  <Counter counter={3} increment={action('increment')} />
)
