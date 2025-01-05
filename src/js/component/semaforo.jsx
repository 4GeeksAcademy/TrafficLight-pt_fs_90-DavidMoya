import React, { useState } from "react";


const Semaforo = () => {
    const [color, setColor] = useState("rojo");
    return (
        <div className="principal">
            <div className="container">
                <div className={`luz ${color === 'rojo' ? 'rojo-on' : 'rojo-off'}`} onClick={() => setColor("rojo")}></div>
                <div className={`luz ${color === 'amarillo' ? 'amarillo-on' : 'amarillo-off'}`} onClick={() => setColor("amarillo")}></div>
                <div className={`luz ${color === 'verde' ? 'verde-on' : 'verde-off'}`} onClick={() => setColor("verde")}></div>
            </div>
        </div>
    )
}

export default Semaforo;
