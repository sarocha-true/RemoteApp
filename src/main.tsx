import React from 'react'
import ReactDOM from 'react-dom/client'
import RemoteApp from './RemoteApp'

// Ensure 'root' exists and is non-null
const container = document.getElementById('root')
if (!container) throw new Error('Root container not found')

const root = ReactDOM.createRoot(container as HTMLElement)

root.render(
  <React.StrictMode>
    <RemoteApp />
  </React.StrictMode>
)
