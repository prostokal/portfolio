import '../../scss/blocks/_title.scss';
import './Contacts.scss';


import gsap from '../../libs/gsap';
import { useGSAP } from '@gsap/react';



export function Contacts() {


    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from('.contacts__title', {
            opacity: 0,
            x: -80,
            scrollTrigger: {
                trigger: ".contacts",
                end: "center 5%",
                scrub: true,
            }
        }).from('.contacts__content', {
            opacity: 0,
            x: -60,
            scrollTrigger: {
                trigger: ".contacts",
                end: "center 5%",
                scrub: true,
            }
        }, '-=0.5').from('.contacts__headline', {
            opacity: 0,
            x: 35,
            scrollTrigger: {
                trigger: ".contacts",
                end: "center 5%",
                scrub: true,
            }
        }, '-=0.5')
    })


    return (

    <footer className="contacts" id="contacts">

        <div className="container">    
            <h2 className="contacts__title title title_fz48">[03]</h2>
            
            <h3 className="contacts__headline title">READY FOR NEW PROJECTS.</h3>
            <div className="contacts__content">
                <ul className="content__list">
                    <li className="contacts__contact">
                        <a href="#" className=" link contacts__contact-link ">
                            Email
                        </a>
                        <span className="contacts__contact-subtitle">some@gmail.com</span>
                    </li>
                    
                    <li className="contacts__contact">
                        <a href="#" className=" link contacts__contact-link ">
                            Github 
                        </a>
                        <span className="contacts__contact-subtitle">somehub</span>
                    </li>
                    
                    <li className="contacts__contact">
                        <a href="#" className=" link contacts__contact-link ">
                            Linkedin
                        </a>
                        <span className="contacts__contact-subtitle">someuserdin</span>
                    </li>
                </ul>

            </div>

        </div>

    </footer>
    )
}