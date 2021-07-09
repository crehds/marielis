import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
    </div>
  );
}

export default App;
