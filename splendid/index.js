import { join } from 'path'

const APP_DIR = 'splendid'

const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  appDir: APP_DIR,
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Read Me Page](https://readme.page)',
    },
  ],
  output: 'docs',
  url: 'https://readme.page',
}

export default config