import style from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ObtenerPorPagina, paginaActual, searchByName } from '../../redux/actions';
const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const pagctual = useSelector(state => state.paginaActual);
    const handleChange = (event) => {
        setName(event.target.value)
        console.log("BUSCANDO", name);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(paginaActual(0));
        dispatch(ObtenerPorPagina(0));
        dispatch(searchByName(name));
        setName('')
        if (name.length <= 0) {
            alert('Debes ingresar un nombre')
        }
    }

    return (
        <div className={style.contenedor}>
            <form action="">
                <input className={style.barra} type='search' placeholder='Buscar un personaje...' onChange={(event) => handleChange(event)} value={name}/>
                <button className={style.boton} type='submit' onClick={(event) => handleSubmit(event)} ></button>
            </form>
        </div>
    );
}
export default SearchBar;