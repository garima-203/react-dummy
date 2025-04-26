 
import { Outlet} from 'react-router-dom';
import './App.css'; 
import Seo from './Components/Seo';
import NavButtons from './Components/Nav';

function App() { 

  return (
    <>
      <Seo
        title="Home"
        description="Setup of helmet in react project"
        keywords="react, helmet, setup"
      />
      <NavButtons/>
       <Outlet /> 
       <h1>Hello</h1>
    </>
  )
}

export default App
