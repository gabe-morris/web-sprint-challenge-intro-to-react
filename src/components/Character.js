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
                    return <div>
                <h2>{char.name}</h2>
                <button>{char.birth_year}</button>
                <p>Gender:{char.gender}</p>   
                <p>Height:{char.height}</p>
                <p>Mass:{char.mass}</p>
                <p>Birth Year:{char.birth_year}</p>
                <p>Eye Color: {char.eye_color}</p>
                <p>Hair Color: {char.hair_color}</p>
                <p>Skin Color: {char.skin_color}</p>
            </div>
        })
    )
    }



export default Character