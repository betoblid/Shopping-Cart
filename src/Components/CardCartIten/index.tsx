import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./CardCartIten.scss";
import { useProvaider } from "../../Context/UserProvaider";
import { FormatCurry } from "../../Utils";
import { ArrayProduct } from "../../Interface";

const CardCartIten = ({ data }: ArrayProduct) => {
    //responsavel por mostra quantidade do produto
    const [qtnIten, setQtnIten] = useState<number>(1);
    //desestruturando um objeto para passar as informações para o card
    const { id, name, photo, price } = data;
    //pegando o hook que esta no provaider
    const { setCartIten, cartiten } = useProvaider();
    //funçao que filtra os dados existentes e retorna um novo arrray de dados mas sem o item que foi apagado
    const HandleRemoveItem = (id: number): void => setCartIten(cartiten.filter((item) => item.id !== id));

    return (
        <div className="container-produto-venda row" id={`${id}`}>
            <button
                className="btn-close"
                onClick={() => HandleRemoveItem(id)}
            ><IoIosCloseCircle />
            </button>

            <div>
                <img src={photo} alt={name} />
            </div>

            <div className="box-info-produto-compra">
                <p>{name}</p>
            </div>

            <div className="box-qtn-produto">
                <div>
                    <p>Qtn:</p>
                    <div className="btn-qtn-produto">
                        <button
                            onClick={() => setQtnIten(qtnIten - 1)}
                            onMouseOut={() => qtnIten <= 0 && HandleRemoveItem(id)}
                        >-</button>
                        <span>{qtnIten}</span>
                        <button
                            onClick={() => setQtnIten(qtnIten + 1)}>
                            +
                        </button>
                    </div>
                </div>

                <div className="box-valor">
                    <h3>{FormatCurry(Number(price) * qtnIten)}</h3>
                </div>
            </div>
        </div>
    );
}
export default CardCartIten;
