import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'
const App = () => {
    const [char, setChar] = useState([])
    const [currentChar,setCurrentChar] = useState(null)
    const openDetails = char => {
      setCurrentChar(char)
    }
    const closeDetails = () => {
      setCurrentChar(null)
    }
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then (res => setChar(res.data))
  },[])
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}

export default App;
