import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { Counter } from './'

// const stories = storiesOf('Components', module)

// stories
//   .addDecorator(withKnobs)
//   .addDecorator(withInfo({ inline: true }))
//   .add('Counter', () => <Counter counter={0} increment={action('increment')} />)

storiesOf('Component', module).add(
  'simple info',
  withInfo({
    styles: {
      header: {
        h1: {
          color: 'red',
        },
      },
    },
    text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
    // other possible options see in Global options section below
  })(() => <Counter counter={0} increment={action('increment')} />)
)
