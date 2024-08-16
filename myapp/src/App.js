import './App.css';
import Menu from './Component/Menu'
import 'bootstrap/dist/css/bootstrap.css'
import Congrats from './Component/Congrats';
import Ipl from './Component/Ipl'
import Buttons from './Component/Buttons'
import { Notifications } from './Component/Notifications';
import { Login } from './Component/Login';

function App() {
  return (
    <>
    <Menu/>
    <Congrats/>
    <Ipl/>
    <Buttons/>
    <Notifications/>
    <Login/>
    </>
  )
   
}

export default App;
