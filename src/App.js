import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  const title="Hi";
  //const person={name:"Reva" ,age:10 };    We cant output objects in js
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/"  element ={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/blog/:id" element={<BlogDetails />} />    {/* here id is dynamic and change everytime */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
