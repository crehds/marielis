import './App.css';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import { Footer } from './components/Footer';
import { useStateValue } from './Context';
import { Products } from './pages/Products';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

function handleContent(page) {
  switch (page) {
    case 'Products':
      return <Products />;
    case 'AboutUs':
      return <AboutUs />;
    case 'ContactUs':
      return <ContactUs />;
    default:
      break;
  }
}

function App() {
  const [state, {}] = useStateValue();
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      {handleContent(state.home)}
      <Footer />
    </div>
  );
}

export default App;
