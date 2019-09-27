import React from 'react'
import { action } from '@storybook/addon-actions'
import { Todos } from './'

export default {
  title: 'Todos',
}

export const primary = () => (
  <Todos todos={[{ title: 'test' }]} onRemove={action('remove')} />
)
