import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled, { ThemeProvider } from 'styled-components'

const Character = () => {
    const [details, setDetails] = useState([])
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people`)
        .then(res => setDetails(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        details.map(char => {
            return <div>{char.name}
            <button>{char.birth_year}</button>
            </div>
        })
    )
    }





export default Character