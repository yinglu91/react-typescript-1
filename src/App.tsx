import { useState } from 'react'
import Link from './components/Link';
import LinkGen from './components/LinkGen'
import Counter from './components/Counter'
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0)
  const increment = () => setCount(prevCount => prevCount + 1)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Counter increment={increment} count={count} />

        <Link
          url="https://reactjs.org"
          className="App-link"
          variant="regular"
        >
          Learn React with typescript 2
        </Link>

        <LinkGen
          crop='fill'
          font={{
            family: 'sabs-seruf',
            size: 100,
            weight: 200
          }}
          height={100}
          width={200}
          />
      </header>
    </div>
  );
}

export default App;
