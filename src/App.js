import { BrowserRouter } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
