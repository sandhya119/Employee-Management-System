// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent' //this must be there 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {


  return (
   //within a fragment tag
   //importing and using components
   <>
   <BrowserRouter>
   <HeaderComponent/>
   <Routes>
    {/* //http://localhost:3000 */}
    <Route path='/' element={<ListEmployeeComponent/>}></Route>
     {/* //http://localhost:3000/employees */}
     <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
  
   {/* //http://localhost:3000/add-employee */}
    <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
    {/* //http://localhost:3000/edit-employee */}
    <Route path='edit-employee/:id' element={<EmployeeComponent/>}></Route>
     </Routes>
   <FooterComponent/>
   </BrowserRouter>
    </>
  )
}

export default App
