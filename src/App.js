import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addproduct from './component/Addproduct';
import Editproduct from './component/Editproduct';
import Home from './component/Home';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/addproduct' element={<Addproduct/>}></Route>
         <Route path='/editproduct/:id' element={<Editproduct/>}></Route>
     </Routes>
    </>
  );
}

export default App;
