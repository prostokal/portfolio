import './App.scss'

import { useState } from 'react'

import { Promo } from '../../sections/Promo/Promo';
import { About } from '../../sections/About/About'
import { Portfolio } from '../../sections/Portfolio/Portfolio';
import { Contacts } from '../../sections/Contacts/Contacts';

import { lenis } from '../../libs/lenis';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Promo></Promo>
      <About></About>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
    </>
  )
}

export default App
