import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import NoteState from './contex/notes/NoteState'
import { Sidebar } from './components/Sidebar';
import { Notes } from './components/Notes';

function App() {
  return (
    <NoteState>
    <div>
      <BrowserRouter>
       <Navbar/>
       <Sidebar/>
       <Notes/>
        {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes> */}
      </BrowserRouter>
    </div>
    </NoteState>
  );
}

export default App;
