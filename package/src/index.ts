
/*
  start: string = 'top 80%', // enter and leaveback
  end: string = 'top bottom', // leave and enterback
*/

interface IScrollOptions {
  animation?: any
  enter?: () => void
  enterBack?: () => void
  leave?: () => void
  leaveBack?: () => void
  start?: string
  end?: string
  scrub?: boolean
}

interface ICreateTriggers {
  targets?: HTMLElement[]
  removeClasses?: boolean
  hasScrub?: boolean
}

export class GGScrollTrigger {
  scrollTrigger;
  options;

  constructor(scrollTrigger, options = { markers: false }) {
    this.scrollTrigger = scrollTrigger
    this.options = options
  }

  setOptions(
    trigger: HTMLElement,
    {
      animation,
      enter,
      enterBack,
      leave,
      leaveBack,
      start = 'top 80%',
      end = 'top bottom',
      scrub = false,
    }: IScrollOptions,

    type: string = 'default',
  ) {
    return {
      trigger,
      animation,
      start: type === 'return' ? 'top 100%' : start, // enter and leaveback
      end, // leave and enterback
      markers: this.options.markers ? { startColor: 'red', endColor: 'green', fontSize: '18px', fontWeight: 'bold', indent: 20 } : false,
      scrub,

      onEnter: () => enter && enter(),
      onLeaveBack: () => leaveBack && leaveBack(),
      onLeave: () => leave && leave(),
      onEnterBack: () => enterBack && enterBack(),
    }
  }

  createTriggers(
    trigger: HTMLElement,
    animation: any,
    {
      targets = [],
      removeClasses = false,
      hasScrub = false,
    }: ICreateTriggers = null
  ): void {

    this.scrollTrigger.create(this.setOptions(
      trigger,
      {
        enter: () => { animation.play() },
        scrub: hasScrub
      }
    ))

    this.scrollTrigger.create(this.setOptions(
      trigger,
      {
        leaveBack: () => {
          animation.progress(0).pause()
          
          // TODO: Add class support to this later
          // if (removeClasses && targets !== undefined) {
          //   Array.prototype.forEach.call(targets, item => {
          //     if (item) {
          //       if (item.classList.contains('text-reveal--ltt')) {
          //         item.classList.remove(this.classes.reveal.ltt)
          //       }
          //       else {
          //         item.classList.remove(this.classes.reveal.ltr)
          //       }
          //     }
          //   })
          // }
        },
      },
      'return'
    ))
  }
}
