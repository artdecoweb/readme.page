/* yarn example/ */
import readmePage from '../src'

(async () => {
  const res = await readmePage({
    text: 'example',
  })
  console.log(res)
})()