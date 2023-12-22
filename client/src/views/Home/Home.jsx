import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getAllCharacters } from "../../redux/actions";
import Cards from '../../components/Cards/Cards'
import estilo from './Home.module.css';
import Paginado from '../../components/Paginado/Paginado';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavBar from '../../components/NavBar/NavBar';
const Home = () => {
    return (
        <>
            <div className={estilo.contenedorSearchBar}>
                {/* <div > */}
                {/* <div className={estilo.contenedorSideBar}>
                    <ul>
                        <li>
                            <a href="http://localhost:5173/">INICIO</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="http://localhost:5173/about">ACERCA DE</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="http://localhost:5173/favorites">FAVORITOS</a>
                        </li>
                    </ul>
                </div> */}
                {/**BARRA LATERAL DESPLEGABLE */}
                <SearchBar />
            </div>
            <div>
                <NavBar />
            </div>
            <Paginado />
        </>
    )
}

export default Home;
