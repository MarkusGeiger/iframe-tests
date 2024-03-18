import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FrameTest from './components/FrameTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Grafana IFrame Test</h1>
      <FrameTest/>
    </>
  )
}

export default App
