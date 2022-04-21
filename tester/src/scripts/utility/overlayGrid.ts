const overlayGrid = {
  el: {
    root: document.querySelector<HTMLElement>('.overlay-grid'),
    button: document.querySelector<HTMLButtonElement>('.overlay-grid__button')
  },

  classes: {
    show: {
      root: 'overlay-grid--show',
      button: 'overlay-grid__button--active',
    },
  },

  init() {
    this.handleButton()
  },

  handleButton() {
    if (this.el.button) {
      this.el.button.addEventListener('click', (e: Event & { target: HTMLButtonElement }) => {
        if (!this.el.root.classList.contains(this.classes.show.root)) {
          this.show()
        }
        else {
          this.hide()
        }
      })
    }
  },

  show() {
    this.el.root.classList.add(this.classes.show.root)
    this.el.button.classList.add(this.classes.show.button)
  },

  hide() {
    this.el.root.classList.remove(this.classes.show.root)
    this.el.button.classList.remove(this.classes.show.button)
  },
}

export default overlayGrid