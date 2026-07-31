import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

window.addEventListener('error', (e) => {
  const errDiv = document.createElement('div');
  errDiv.style.cssText = 'color:red; background:white; z-index:9999; position:absolute; top:0; left:0; padding:20px; font-family:monospace; white-space:pre-wrap;';
  errDiv.textContent = e.error?.stack || e.message || 'Unknown Error';
  document.body.appendChild(errDiv);
});
window.addEventListener('unhandledrejection', (e) => {
  const errDiv = document.createElement('div');
  errDiv.style.cssText = 'color:red; background:white; z-index:9999; position:absolute; top:50%; left:0; padding:20px; font-family:monospace; white-space:pre-wrap;';
  errDiv.textContent = 'Unhandled Promise: ' + (e.reason?.stack || e.reason);
  document.body.appendChild(errDiv);
});

// Register the PWA service worker explicitly
// @ts-ignore
import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
