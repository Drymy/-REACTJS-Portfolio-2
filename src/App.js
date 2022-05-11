import './App.css';
import { Header } from './components/header.js';
import { About } from './components/about.js';
import { Coding } from './components/coding.js'
import { Design } from './components/design.js'

function App() {
  return (
    <div className="App">
          <Header />
          <About />
          <Coding />
          <Design />
    </div>
  );
}

export default App;
