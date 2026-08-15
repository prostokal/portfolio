import './App.scss'

import { useState, useEffect} from 'react'
import { usePreloadImage } from '../../hooks/usePreloadImage';

import { Promo } from '../../sections/Promo/Promo';
import { About } from '../../sections/About/About'
import { Portfolio } from '../../sections/Portfolio/Portfolio';
import { Contacts } from '../../sections/Contacts/Contacts';

import backgroundB from '../../assets/img/promo/nnnn.webp'
import backgroundS from '../../assets/img/promo/nnn-small.webp'

import { Preloader } from '../Preloader/Preloader';

import { lenis } from '../../libs/lenis';

function App() {
    const heroImage = window.innerWidth <= 992
        ? backgroundS
        : backgroundB;
    const [isLoaded] = usePreloadImage(heroImage);

    useEffect(() => {
        isLoaded ? lenis.start() : lenis.stop();
    }, [isLoaded]);


    return (
        !isLoaded ? <Preloader/> :
        <>
            <Promo />
            <About />
            <Portfolio />
            <Contacts />
        </>

    );
}

export default App
