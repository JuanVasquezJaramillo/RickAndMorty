import style from '../../modules/searchBar.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCharByName } from '../../Redux/actions';
const SearchBar = ({ onSearch }) => {

    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [name, setName] = useState('');


    const handleChangeId = (event) => {
        setId(event.target.value)
    };

    const handleChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getCharByName(name));
        setName('')
        if (!name.length) {
            alert('Debes ingresar un nombre')
        }
    }

    return (
        <div className={style.contenedor}>
            <input type='search' onChange={handleChangeId} value={id} />
            <button onClick={() => { onSearch(id) }}>Agregar</button>
        </div>
    );
}
export default SearchBar;