import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/OneCharacter.css';

function OneCharacter() {
  const param = useParams()
  const [ character, setCharacter ] = useState([])

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${param.id}`)
    .then((res)=>res.json())
    .then((data)=>setCharacter(data))
  },[param.id])

  return (
    <>
    <div key={character.id}>
      <h1>{character.name}</h1>
      <img className='pic' src={character.image} alt={character.name}/>
      <h3>Species: {character.species}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Status: {character.status}</h3>
      <Link to='/'><button className='basic-btn'>Back</button></Link>
    </div>
    </>
  )
}

export default OneCharacter