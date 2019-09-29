---
inject: true
to: src/store/root.ts
before: // Do not DELETE hygen import
---
import { <%= Name.toLowerCase() %> } from './<%= Name.toLowerCase() %>/reducers'