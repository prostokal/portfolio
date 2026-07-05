import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
export const lenis = new Lenis({smoothWheel: true, smoothTouch: false, syncTouch: true})

function raf(time) {
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    gsap.ticker.lagSmoothing(0);

}
requestAnimationFrame(raf)
