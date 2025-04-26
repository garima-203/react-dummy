 
import { Outlet} from 'react-router-dom';
import './App.css';  
import NavButtons from './Components/Nav'; 
import SEO from './layout/Head';

function App() { 

  return (
    <> 
      <NavButtons/>
       <Outlet /> 
       <h1>Hello</h1>
    </>
  )
}

export default App
