import '../../scss/blocks/_title.scss';

import './About.scss';


import gsap from '../../libs/gsap';
import { useGSAP } from '@gsap/react';

export function About() {
    
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.about__main-descr',{
            y: -100,
            opacity: 0,
            stagger: 0.08,
            scrollTrigger: {
                trigger: ".about",
                start: "top 60%",
                end: "bottom center",
                scrub: true,
            }  
        })
    })
    
    return (
         <section className="about" id="about">
            <div className="container">
                <div className="about__content">
                    <h2 className="about__title title title_fz48">
                        [01]
                    </h2>
                    <main className="about__main">
                        <p className="about__main-descr"> 
                            I TURN <span>IDEAS</span> INTO MODERN
                            WEB PRODUCTS.
                        </p>
                    </main>
                    <div className="about__info">
                        <p className="about__info-descr">
                            React • TypeScript • JavaScript <br/>
                            <span>
                                Based in the Netherlands
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
    
}