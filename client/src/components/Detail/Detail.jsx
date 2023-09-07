import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import estilo from './detail.module.css'


const Detail = () => {
    const { id } = useParams();
    return (
        <div className={estilo.contenedor}>
            <img src={character.image && character.image} alt='' className={estilo.pruebaImg} />
            <h1>Name: {character.name && character.name}</h1>
            <h1>Status: {character.status && character.status}</h1>
            <h1>Species: {character.species && character.species}</h1>
            <h1>Gender: {character.gender && character.gender}</h1>
            <h1>Origin: {character.origin?.name && character.origin?.name}</h1>
            <Link to='/home'>
                <button className={estilo.boton}></button>
            </Link>
        </div>
    )
}
export default Detail;