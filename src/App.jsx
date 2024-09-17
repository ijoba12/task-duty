import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Home from './Components/Home';
import NewTask from './Components/NewTask';
import Task from './Components/Task';
import EditTask from './Components/EditTask';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/NewTask' element={<NewTask/>}/>
      <Route path='/Task' element={<Task/>}/>
      <Route path='/EditTask' element={<EditTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
