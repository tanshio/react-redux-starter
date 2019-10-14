import { configure } from '@storybook/react'
import '../src/styles/global.css'
// automatically import all files ending in *.stories.tsx
// const req = require.context('../stories', true, /\.stories\.js$/);
//
// function loadStories() {
//   req.keys().forEach(req)
// }
//
// configure(loadStories, module);
configure(require.context('../src/components', true, /\.stories\.tsx$/), module)
