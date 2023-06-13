import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Services from './Components/Services.js';
import Single from './Components/Single.js';
import About from './Components/About.js';
import Login from './Components/Login.js';
import Profile from './Components/Profile.js';
import Blog from './Components/Blog.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useReducer} from "react";
export const UserContext = createContext();


const Routing = () => {
  return (
   <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Services" element={<Services/>} />
        <Route exact path="/Single" element={<Single/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Profile" element={<Profile/>} />
        <Route exact path="/Blog" element={<Blog/>} />
      </Routes>
      </>
  )
}
function App() {
 return (
<>
      <Router>
          <Routing/>
      </Router>
    </>)
}

export default App;