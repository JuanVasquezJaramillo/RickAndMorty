import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import estilo from './filtros.module.css';
import { handleOrderCharacters, handleStatusCharacters, handleGenderCharacters, paginaActual } from '../../redux/actions';

const Filtros = () => {
    const currentPag = useSelector(state => state.paginaActual);
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        event.preventDefault();
        dispatch(handleOrderCharacters(event.target.value, currentPag));
        dispatch(paginaActual(currentPag))
    }

    const handleStatus = (event) => {
        event.preventDefault();
        dispatch(handleStatusCharacters(event.target.value, currentPag));
        dispatch(paginaActual(currentPag));
    }

    const handleGender = (event) => {
        event.preventDefault();
        dispatch(handleGenderCharacters(event.target.value, currentPag));
        dispatch(paginaActual(currentPag));
    }
    return (

        <>
            <div className={estilo.contenedorFiltros}>
                <select name="" id="" onChange={event => handleOrder(event)} >
                    <option value="any">CUALQUIER ORDEN</option>
                    <option value="asc">↑ ORDENAR DE A-Z</option>
                    <option value="desc">↓ ORDENAR DE Z-A</option>
                </select>
                <select name="" id="" onChange={event => handleStatus(event)}>
                    <option value="anyStatus">CUALQUIER ESTADO</option>
                    <option value="alive">VIVO</option>
                    <option value="dead">MUERTO</option>
                    <option value="unknown">DESCONOCIDO</option>
                </select>
                <select name="" id="" onChange={event => handleGender(event)}>
                    <option value="anyGender">CUALQUIER GÉNERO</option>
                    <option value="Female">FEMENINO</option>
                    <option value="Male">MASCULINO</option>
                    <option value="Genderless">SIN GÉNERO</option>
                    <option value="unknown">DESCONOCIDO</option>
                </select>
            </div>
        </>
    );
}

export default Filtros;
