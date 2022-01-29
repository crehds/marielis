import './App.css';
import { NavBar } from './components/NavBar';
import { GlobalStyle } from './GlobalStyles';
import { Footer } from './components/Footer';
import { useStateValue } from './Context';
import { Products } from './pages/Products';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { Customers } from './pages/Customers';

function handleContent(page) {
  switch (page) {
    case 'Products':
      return <Products />;
    case 'AboutUs':
      return <AboutUs />;
    case 'Customers':
      return <Customers />;
    case 'ContactUs':
      return <ContactUs />;
    default:
      break;
  }
}

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [state, {}] = useStateValue();
  return (
    <div id='app' className='App'>
      <GlobalStyle />
      <NavBar />
      {handleContent(state.home)}
      <Footer />
    </div>
  );
}

export default App;
