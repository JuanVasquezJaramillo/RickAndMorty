import React from "react";
import "./ManualParallax.css";
import Carrousel from "../Carrousel/Carrousel";

const ManualParallax = () => {
    return (
        <div>
            {/* IMAGEN Y SECCIÓN 1 */}
            <div className="bgimg-1">
                <div className="caption">
                    <span className="border">Rick And Morty Ultimate Project</span>
                </div>
            </div>

            <div className="section">
                <h3 className="border">ACERCA DEL PROYECTO</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium neque iure autem voluptates eveniet rem quisquam laboriosam quis reprehenderit corporis odio, vitae, nobis sit consectetur ad esse facilis provident!
                </p>
            </div>

            {/* IMAGEN Y SECCIÓN 2 */}
            <div className="bgimg-2">
                <div className="caption">
                    <span className="border">Rick And Morty Ultimate Project</span>
                </div>
            </div>

            <div className="section">
                <h3 className="border">PERSONAJES</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est sint earum hic rem aperiam delectus? Ea, temporibus nesciunt ipsum perspiciatis provident animi, aliquam molestiae quaerat porro debitis fuga officiis.
                </p>
            </div>
            {/* LLAMADO Y RENDERIZADO DEL COMPONENTE CARROUSEL */}
            <Carrousel />
            {/* IMAGEN Y SECCIÓN 3  */}
            <div className="bgimg-3">
                <div className="caption">
                    <span className="border">CREADORES</span>
                </div>
            </div>

            <div className="section">
                <h3 className="border">Mucho más</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est sint earum hic rem aperiam delectus? Ea, temporibus nesciunt ipsum perspiciatis provident animi, aliquam molestiae quaerat porro debitis fuga officiis.
                </p>
            </div>
        </div>
    );
}

export default ManualParallax;