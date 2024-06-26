import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Sellpage from "./components/Sellpage";
import Login from "./components/Login";
import Cardlist from "./components/CardList";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { MyContextProvider } from "./context/myContext";
import FAQ from "./components/FAQ";


const Routing = () => {
  return (
    <MyContextProvider>

    <Routes>
      <Route exact path="/" element={<Body />}/>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/uploadCoupon" element={<Sellpage />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/cardList" element={<Cardlist />}></Route>
      <Route exact path="/*" element={<Error />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      <Route exact path="/faq" element={<FAQ />}></Route>
      
    </Routes>
    </MyContextProvider>
  );
};

export default Routing;
