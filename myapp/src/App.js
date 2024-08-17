import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Component/Menu'
import Congrats from './Component/Congrats'
import Ipl from './Component/Ipl'
import Buttons from './Component/Buttons'
import {Notifications} from './Component/Notifications'
import {Login} from './Component/Login'
import Technologies from './Component/Technologies';

function App() {
  return (
<>
<Menu/>
<Congrats/>
<Ipl/>
<Buttons/>
<Notifications/>
<Login/>
<Technologies/>
</>
  );
}

export default App;
