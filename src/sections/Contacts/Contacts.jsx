import '../../scss/blocks/_title.scss';
import './Contacts.scss';

export function Contacts() {
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