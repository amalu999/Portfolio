import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Emplyment from './Components/Emplyment';
import Skillset from './Components/Skillset';
import Acheivement from './Components/Acheivement';
import Education from './Components/Education';
import Contact from './Components/Contact';


function App() {
  return (
    <div className='main'>
      <h1 style={{textAlign:"center"}}></h1>

      <Routes>
        <Route path='/' element={<Content/>}></Route>
        <Route path='employment' element={<Emplyment/>}></Route>
        <Route path='skillset' element={<Skillset/>}></Route>
        <Route path='projects' element={<Acheivement/>}></Route>
        <Route path='education' element={<Education/>}></Route>
        {/* <Route path='contact' element={<Contact/>}></Route> */}
        
        
      </Routes>

    </div>
  );
}

export default App;
