import './App.css'
import { useRef } from 'react'
import ControledForm from './components/ControledForm'

function App() {
  const fromRef = useRef();

  return (
    <>
      <ControledForm fromRef={fromRef} />
      <button
        type="button"
        onClick={() => fromRef.current.requestSubmit()}
      >
        Submit
      </button>
    </>
  )
}

export default App
