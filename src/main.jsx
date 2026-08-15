import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App'
import './scss/index.scss'

const initialLoader = document.getElementById('initial-loader');

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App  />
  // </StrictMode>,
)
initialLoader?.remove();