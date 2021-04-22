import { BrowserRouter } from 'react-router-dom';
import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/Generic/footerComponent';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarComponent />
        <Routes />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
