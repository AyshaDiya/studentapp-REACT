import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sg from './Components/Sg';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';
import Tablearray from './Components/Tablearray';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path='/t' element= {<Sg/>}/>
        <Route path='/w' element={<View />} />
        <Route path='/c' element={<Tablearray/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
