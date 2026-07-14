import gsap from './gsap';

let previewTween = null;

const fade = (selector) => {
    if (previewTween && previewTween?.isActive()) {
        return;
    }
    previewTween = gsap.from(selector, {
        opacity: 0,
        duration: 1,
        x: 60,
        overwrite: "auto"
    })
}
const transition = (selector) => {
    if (previewTween && previewTween?.isActive()) {
        return;
    }
    previewTween = gsap.from(selector, {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: .3,
        overwrite: "auto"
    })
}



export {fade, transition};