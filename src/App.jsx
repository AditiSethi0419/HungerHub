

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';


function App() {

  return (
    <div>
     <Header/>
     {/* {if path is / the we should have body , if path is /about then about component should be there and if path is acontact us then just contact component shopuld be there} */}
     <Outlet />
    
    </div>
  )
}


export default App
