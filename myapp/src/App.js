import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Component/Menu'
import Congrats from './Component/Congrats'
import Ipl from './Component/Ipl'
import Buttons from './Component/Buttons'
import {Notifications} from './Component/Notifications'
import {Login} from './Component/Login'
import Technologies from './Component/Technologies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path = '/home' element = {<><Congrats/><Ipl/><Buttons/><Notifications/><Login/><Technologies/></>}/>
  <Route path = '/' element = {<Congrats/>}/>
  <Route path = '/ipl' element = {<Ipl/>}/>
  <Route path = '/button' element = {<Buttons/>}/>
  <Route path = '/notification' element = {<Notifications/>}/>
  <Route path = '/login' element = {<Login/>}/>
  <Route path = '/tech' element = {<Technologies/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
