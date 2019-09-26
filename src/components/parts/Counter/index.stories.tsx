import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Counter } from './'

const stories = storiesOf('Components', module)

stories.add(
  'Counter',
  () => <Counter counter={0} increment={action('increment')} />,
  { info: { inline: true } }
)
