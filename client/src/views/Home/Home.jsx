import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllCharacters } from "../../redux/actions";
import Cards from '../../components/Cards/Cards'
import estilo from './Home.module.css';
import Paginado from '../../components/Paginado/Paginado';

const Home = () => {
    return (
        <>
            <Paginado />
        </>
    )
}

export default Home;
