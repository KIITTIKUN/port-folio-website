import './App.scss'
import {Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About'
import Contact from  './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/skill" element={<Skills/>}></Route>
        <Route path="/exp" element={<Experience/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
