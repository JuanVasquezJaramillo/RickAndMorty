import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import estilo from './paginado.module.css'
import Cards from '../../components/Cards/Cards'
import { ObtenerPorPagina } from '../../redux/actions';
const Paginado = () => {

    const dispatch = useDispatch();
    const probando = useSelector(state => state.allCharacters);
    console.log("ASDSDSDs", probando);
    const Characters = [800];
    const [currentPag, setCurrentPag] = useState(1);
    const [cantidadPorPag] = useState(19.5);
    const indiceUltimaReceta = currentPag * cantidadPorPag
    const indicePrimerReceta = indiceUltimaReceta - cantidadPorPag
    const currentCharacters = Characters.slice(indicePrimerReceta, indiceUltimaReceta)

    const paginado = (pageNumber) => {
        setCurrentPag(pageNumber);
        dispatch(ObtenerPorPagina(pageNumber));
    }
    // useEffect(() => {
    //     dispatch(getAllCharacters());
    // })




    const paginasDisponibles = []

    for (let i = 1; i <= Math.ceil(Characters / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }

    return (
        <div>
            {paginasDisponibles && paginasDisponibles.map(number => (
                <div className={estilo.contenedor} key={number}>
                    <button className={estilo.buttonpage} onClick={() => paginado(number)}> {number}  </button>
                </div>
            ))}
            <div className={estilo.contenedorPadre}>
                <Cards characters={probando} />
            </div>
        </div>
    )
}
export default Paginado
