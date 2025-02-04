import vuetify from './vuetify'
import pinia from './pinia';

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(pinia)
}
