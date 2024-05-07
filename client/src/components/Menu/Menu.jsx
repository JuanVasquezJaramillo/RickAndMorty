import React from "react";
import estilo from './menu.module.css'
import { useState } from "react";

const Cart = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className={estilo.contenedor}>
                <button  className={estilo.icono} onClick={() => setActive(!active)} ></button>
            </div>
            <div >
                {active ? (
                    <>
                        <div className={estilo.contenedorSideBar}>
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
                        </div>
                    </>) : <></>}

            </div>
        </>
    )
}

export default Cart;