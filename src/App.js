import { useState } from 'react'
import { secretLongRunningFunction } from '@iwsllc/secret-math-funcs'
import Spinner from './spinner'
import './App.css';

function App() {
  const [result, setResult] = useState()
  const [busy, setBusy] = useState(false)

  const handleClick = () => {
    setBusy(true)
    setResult()

    secretLongRunningFunction(4, 5)
      .then((result) => {
        setResult(result)
        setBusy(false)
      }) // for brevity; ignoring errors
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button data-testid="actionButton" className="btn btn-secondary me-2" onClick={handleClick}>
            Special function
            {busy && <Spinner />}
          </button>
        </p>
        {result && <p><strong>🎉 Result: <span data-testid="actual-result">{result}</span> 🎉</strong></p>}
      </header>
    </div>
  );
}

export default App;
