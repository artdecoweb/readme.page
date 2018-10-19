import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import readmePage from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await readmePage({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts