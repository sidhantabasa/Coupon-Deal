import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Body from './components/Body';
import Error from './components/Error';
import Sellpage from './components/Sellpage';



function App() {
  return(
      <>
      <Header/>
      <Body/>
      
      <Footer/>
      <Login/>
      <Signup/>
      <Error/>
      <Sellpage/>
      
      </>      
      
  )
}

export default App;
