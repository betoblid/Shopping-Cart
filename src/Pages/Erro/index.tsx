import React from 'react';
import {Link} from "react-router-dom"
import "./Erro.scss";

function Erro() {
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Por favor volte para pagina principal</p>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default Erro;
