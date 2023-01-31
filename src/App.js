import logo from './logo.svg';
import './App.css';
import Images from './components/images-grid/Images';
import { ImagesProvider } from './context/images.provider';
import { LoaderProvider } from './context/loader.provider';

function App() {
  return (
    <LoaderProvider>
      <ImagesProvider>
        <Images />
      </ImagesProvider>
    </LoaderProvider>
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
