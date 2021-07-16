import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'
const App = () => {
    const [char, setChar] = useState([])
    const [currentChar,setCurrentChar] = useState(false)

    const openDetails = () => {
      setCurrentChar(!currentChar)
    }
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then (res => setChar(res.data))
    .catch (err => console.log(err))
  },[])
  const Name = props => {
    const {name} = props
    console.log(name)
  }
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    <Character />
    </div>
  );
}

export default App;
