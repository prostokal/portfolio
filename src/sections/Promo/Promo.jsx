import '../../scss/blocks/_title.scss';
import './Promo.scss';

import backgroundB from '../../assets/img/promo/nnnn.png'
import backgroundS from '../../assets/img/promo/nnn-small.jpg'

import gsap from '../../libs/gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger} from 'gsap/all';
export function Promo()  {
    
    useGSAP(() => {
        let split = SplitText.create(".promo__title", { type: "chars"});
        const tl = gsap.timeline();
    
        tl.to(".promo__content + .promo__portrait", {
            x: -30,
            opacity: 0,
            scrollTrigger: {
                trigger: ".promo",
                start: "top 5%",
                scrub: true,
            }
        })
        tl.from(split.chars, {
            x: 80,
            opacity: 0,
            duration: 0.7,
            stagger: 0.04,
        })
        .from(".promo__portrait", {
            opacity: 0,
            scale: 1.08,
            duration: 1.2,
        }, "-=.5")

        .from(".promo__subtitle", {
            opacity: 0,
            y: 20,
        })
        .from(".promo__btns", {
            opacity: 0,
            y: 15,
            stagger: .1,
            duration: .5,
        })
        return () => split.revert();
    })

   return (
        <section className="promo">
            <div className="container">
                
                <div className="promo__content">
                    <div className="title title_fz16 promo__subtitle">NIKITA VOLOKHOV</div>
                    <h1 className="title title_fz48 promo__title"> FRONTEND <br /> DEVELOPER</h1>
                    <div className="promo__btns">
                        <a href="#about" className="promo__link"> <span>[01]</span> ABOUT ME</a>
                        <a href="#projects" className="promo__link"> <span>[02]</span> PORTFOLIO</a>
                        <a href="#about" className="promo__link"> <span>[03]</span> contacts</a>
                    </div>
                </div>

                <div className="promo__portrait">
                    <picture>
                        <source media="(max-width: 576px)" srcset={backgroundS}></source>
                        <img src={backgroundB} alt="portrait"/>
                    </picture>
                </div>

            </div>
        </section>
    )
}