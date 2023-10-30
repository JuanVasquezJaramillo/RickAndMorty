import style from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ObtenerPorPagina, paginaActual, searchByName, userSearch } from '../../redux/actions';
const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const pagctual = useSelector(state => state.paginaActual);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName('')
        if (name.length > 3 && name.length < 30) {
            dispatch(userSearch(true));
            dispatch(paginaActual(0));
            dispatch(searchByName(name));
        } else {
            alert('Debes ingresar un nombre con al menos 4 letras');
        }
    }

    return (
        <div className={style.contenedor}>
            <input className={style.barra} type='search' placeholder='Buscar un personaje...' onChange={(event) => handleChange(event)} value={name} />
            <button className={style.boton} type='submit' onClick={(event) => handleSubmit(event)} ></button>
        </div>
    );
}
export default SearchBar;