import '../../scss/blocks/_title.scss';
import './Contacts.scss';


import gsap from '../../libs/gsap';
import { useGSAP } from '@gsap/react';



export function Contacts() {
useGSAP(() => {
     const mm = gsap.matchMedia();

    mm.add("(max-width: 576px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contacts",
                start: "top 80%",
                end: "+=210",
                scrub: 1.5,
            },
        });

        tl.from(".contacts__title", {
            opacity: 0,
            x: 30,
        })
        .from(".contacts__headline", {
            opacity: 0,
            x: -8,
        }, "+=0.05")
        .from(".contacts__content", {
            opacity: 0,
            y: 8,
        })

    });
    
     mm.add("(min-width: 577px) and (max-width: 1024px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contacts",
                start: "top 90%",
                end: "+=150",
                scrub: 1.5,
            },
        });

        tl.from(".contacts__title", {
            opacity: 0,
            x: 30,
        })
        .from(".contacts__content", {
            opacity: 0,
            x: 15,
        })
        .from(".contacts__headline", {

            opacity: 0,

            x: -15,

        });

    });

    mm.add("(min-width: 1025px)", () => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contacts",
                start: "top 80%",
                end: "+=250",
                scrub: 1.5,

            },
        });

        tl.from(".contacts__title", {
            opacity: 0,
            x: 30,
        })

        .from(".contacts__headline", {
            opacity: 0,
            x: -15,
        })
        .from(".contacts__content", {
            opacity: 0,
            x: 15,
        })
    });

});


    return (

    <footer className="contacts" id="contacts">

        <div className="container">    
            <h2 className="contacts__title title title_fz48">[03]</h2>
            
            <h3 className="contacts__headline title">READY FOR NEW PROJECTS.</h3>
            <div className="contacts__content">
                <ul className="content__list">
                    <li className="contacts__contact">
                        <a href="" className=" link contacts__contact-link ">
                            Email
                        </a>
                        <span className="contacts__contact-subtitle">likiroy11@gmail.com</span>
                    </li>
                    
                    <li className="contacts__contact">
                        <a href="https://github.com/prostokal" className=" link contacts__contact-link ">
                            Github 
                        </a>
                        <span className="contacts__contact-subtitle">prostokal</span>
                    </li>
                    
                    <li className="contacts__contact">
                        <a href="https://www.linkedin.com/in/retroplus/" className=" link contacts__contact-link ">
                            Linkedin
                        </a>
                        <span className="contacts__contact-subtitle">retroplus</span>
                    </li>
                </ul>

            </div>

        </div>

    </footer>
    )
}