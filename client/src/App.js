import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Home />
      {/* <div>Holi</div> */}
    </div>
  );
}

export default App;
