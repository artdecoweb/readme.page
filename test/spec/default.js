import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import readmePage from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof readmePage, 'function')
  },
  async 'calls package without error'() {
    await readmePage()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await readmePage({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T