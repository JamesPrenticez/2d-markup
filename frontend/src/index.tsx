import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/globals.css'

import { Provider as ReduxProvider } from "react-redux";
import { store } from '@redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
)
