import style from './searchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // dispatch(getCharByName(name));
        setName('')
        if (!name.length) {
            alert('Debes ingresar un nombre')
        }
    }

    return (
        <div className={style.contenedor}>
            <input type='search'/>
            <button >Buscar</button>
        </div>
    );
}
export default SearchBar;