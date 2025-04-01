import { useState } from 'react'
import './App.css'
import InputArea from './components/InputArea'

function App() {

  const [inputedText, setInputedText] = useState<string>("");

  return (
    <div>
      <InputArea
        inputedText={inputedText}
        setInputedText={setInputedText}
      />
    </div>
  )
}

export default App
