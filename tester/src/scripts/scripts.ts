import 'polyfills'

// import {
//   tester,
// } from 'components'

//* Grid overlay 
import overlayGrid from 'utility/overlayGrid'

const app = {
  init(): void {

    // * Checks inside of files...
    overlayGrid.init()
  }
}

document.addEventListener('DOMContentLoaded', (): void => {
  setTimeout((): void => {
    document.querySelector('.body').classList.remove('preload')
  }, 100)

  app.init()
})
