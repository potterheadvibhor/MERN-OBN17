import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContextProvider } from './Utils/CounterContext.jsx'
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './Utils/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AuthContextProvider>
          <CounterContextProvider>
             <App />
          </CounterContextProvider>
      </AuthContextProvider>
  </BrowserRouter>
  
    
  
)
