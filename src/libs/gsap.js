import gsap from 'gsap';
import { ScrollTrigger, SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);


const fade = (selector) => {
    gsap.from(selector, {
        opacity: 0,
        duration: 1,
    })
}
const transition = (selector) => {
    gsap.from(selector, {
        transition: "all 0.5s",
        
    })
}



export {fade, transition};
export default gsap;