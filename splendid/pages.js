import { join } from 'path'
import read from '@wrote/read'

const APP_DIR = 'splendid'
const PAGES_DIR = join(APP_DIR, 'pages')
const BUILD_DIR = 'website'

const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  appDir: APP_DIR,
  pagesDir: PAGES_DIR,
  pre: [
    {
      re: /{{ navigation }}/,
      async replacement() {
        const p = join(APP_DIR, 'layout/navigation.html')
        const res = await read(p)
        return res
      },
    },
    {
      re: /{{ company }}/g,
      replacement: '[Splendid](https://splendid.sh)',
    },
  ],
  pages: [
    {
      title: 'Main Page',
      url: 'index.html',
      file: 'index.md',
    },
    {
      title: 'Markdown',
      url: 'markdown.html',
      file: 'markdown.md',
    },
    {
      title: 'HighlightJS',
      url: 'highlightjs.html',
      file: 'highlightjs.md',
    },
  ],
  postProcess: [
    {
      re: /{{ year }}/g,
      replacement: `${new Date().getFullYear()}`,
    },
  ],
  output: BUILD_DIR,
}

export default config