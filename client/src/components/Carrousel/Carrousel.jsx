import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./carrousel.module.css";

const Carrousel = () => {
    const [img, setImg] = useState(0);
    const Characters = useSelector(state => state.allCharacters.slice(10, 30));

    const nextImg = () => {
        if (img < Characters?.length - 1) {
            setImg(img + 1);
        } else {
            setImg(0);
        }
    }

    const prevImg = () => {
        if (img === 0) {
            setImg(Characters.length - 1);
        } else {
            setImg(img - 1);
        }
    }

    useEffect(() => {
        const time = setTimeout(nextImg, 6000);
        return () => clearTimeout(time);
    }, [img], [Characters]);

    console.log("ARRAY PERSONAJES COMPONENTE CARROUSEL: ", Characters);
    return (
        <>
            <div className={style.slideshowContainer}>
                <Link to={`/detail/${Characters?.[img]?.id}`}>
                    <img src={Characters?.[img]?.image} alt="NOT FOUND ANYTHING" className={style.img} ></img>
                </Link>
            </div>
            {/* DIV DOTS AND INTERACTION */}
            <div>
                <a className={style.prev} onClick={prevImg}></a>
                <a className={style.next} onClick={nextImg}></a>
                <div className={style.dotContainer}>
                    {
                        Characters?.length ? (
                            Characters?.map((image, index) => (
                                <span key={index + 1}
                                    className={img !== index ? style.dot : style.activeDot}
                                    onClick={() => setImg(index)}
                                ></span>
                            ))
                        ) : (
                            <p>NO SE HALLÓ UNA IMAGEN QUE SE PUEDA MOSTRAR</p>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Carrousel;