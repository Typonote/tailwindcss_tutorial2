import React,{useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Home from './pages';
import Navbar from './components/Navbar';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';
import contact from './pages/contact';


function App() {

  const [isOpen , setIsOpen] = useState(false)
  const toggle = () => {
  setIsOpen(!isOpen);
  };

  useEffect(() =>{
    const hideMenu = () => {
      if(window.innerWidth > 760 && isOpen){
        setIsOpen(false)
        console.log("resize")
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen}  toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/contact' exact component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;