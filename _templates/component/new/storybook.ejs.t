---
to: src/components/atomic/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.stories.tsx
---
<%
 UpperCamelCase = h.inflection.camelize(Name)
 LowerCamelCase = h.inflection.camelize(Name, true)
%>import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { <%= UpperCamelCase %> } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: '<%= UpperCamelCase %>',
  component: <%= UpperCamelCase %>,
  decorators: [withKnobs, withA11y],
  parameters: {
    componentSubtitle: 'Handy status label',
  },
}

export const Primary = () => {
  const [<%= LowerCamelCase %>, setCount] = useState(1)
  const handleTest = () => {
    setCount(<%= LowerCamelCase %> + 1)
    action('onIncrement')(<%= LowerCamelCase %> + 1)
  }
  return <<%= UpperCamelCase %> <%= LowerCamelCase %>={<%= LowerCamelCase %>} onIncrement={handleTest} />
}

export const Secondary = () => (
  <<%= UpperCamelCase %> <%= LowerCamelCase %>={3} onIncrement={() => action('onIncrement')} />
)