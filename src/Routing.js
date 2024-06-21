import {Routes, Route} from 'react-router-dom'
import Body from './components/Body'
import Signup from './components/Signup'
import Sellpage from './components/Sellpage'
import Login from './components/Login'
import Cardlist from './components/CardList'
import Error from './components/Error'
import Contact from './components/Contact'
const Routing = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Body />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
      <Route exact path='/uploadCoupon' element={<Sellpage />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/cardList' element={<Cardlist />}></Route>
      <Route exact path='/*' element={<Error />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>

    </Routes>
  )
}

export default Routing