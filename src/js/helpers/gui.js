import * as dat from 'dat.gui'
import queryString from 'query-string'

let gui

const init = () => {
  if (!gui) {
    // gui = new dat.GUI({width: 300})
    return;
  }
}

setTimeout(() => {
  const parsed = queryString.parse(location.search)
  const debugMode = parsed.debug === 'true'

  if (debugMode || devMode) {
    init()
  }
})

export default {
  get: (callback) => {
    setTimeout(() => {
      if (gui) {
        callback(gui)
      }
    })
  },
}
