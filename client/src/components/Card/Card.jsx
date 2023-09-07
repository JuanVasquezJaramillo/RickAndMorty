import style from './card.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Card = ({ id, name, status, species, gender, origin, image}) => {

    const location = useLocation();

    return (
        <div className={style.contenedor}>

            <Link to={`/detail/${id}`}>
                <img src={image} className={style.img} />
            </Link>

        </div>
    );
}


export default Card;
