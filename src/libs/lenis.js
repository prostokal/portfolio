import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const lenis = new Lenis({
    anchors: true,
    wheelMultiplier: 1,
    smoothWheel: true,
    syncTouch: false,
})

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

export const scrollTo = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");

    lenis.scrollTo(`${target}`, {duration: 2})
}