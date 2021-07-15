import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Home />
      {/* <div>Holi</div> */}
      <Footer />
    </div>
  );
}

export default App;
