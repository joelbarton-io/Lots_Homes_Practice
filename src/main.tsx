import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createContext } from 'react'
import App from './App.tsx'
import Modal from './Modal.tsx'
import './index.css'
import AppProvider from './ContextProvider.tsx'
// const GlobalData = createContext({})
// const [homes, setHomes] = useState<HomeType[]>();
// const [lots, setLots] = useState<LotType[]>();

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <AppProvider>
      <App />
      <Modal />
    </AppProvider>
  </StrictMode>
)
