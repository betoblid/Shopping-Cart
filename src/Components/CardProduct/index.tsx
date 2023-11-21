import React from "react";
import "./CardProduct.scss";
import { BiCalendarAlt } from "react-icons/bi";
import { ArrayProduct } from "../../Interface";
import { useProvaider } from "../../Context/UserProvaider";
import { FormatCurry } from "../../Utils";

const CardProduct = ({ data }: ArrayProduct) => {

    //o hook que é fornecido pelo provaider é onde fica armazenado nossos objetos produtos que foi comprados
    const { setCartIten, cartiten } = useProvaider();
    //desestrutura um objeto e passa as informações para o card
    const { description, id, name, photo, price } = data;
    //function que adiciona nosso produto dentro do hook cartinten
    const HandleAddCart = () => setCartIten([...cartiten, data]);

    return (
        <section className="card-products-venda" id={String(id)}>
            <figure>
                <img
                    src={photo}
                    alt={name} />
            </figure>
            <div className="card-infor_produ">
                <div className="box-info">
                    <div className="title-produt">
                        <h2>{name}</h2>
                    </div>
                    <div className="currency">
                        <span>
                            {FormatCurry(Number(price))}
                        </span></div>
                </div>

                <div className="paragrafo-info">
                    <p>{description}</p>
                </div>
            </div>
            <button
                className="btn-comprar"
                onClick={() => HandleAddCart()}
            > <BiCalendarAlt />
                Comprar
            </button>
        </section>
    );
}
export default CardProduct;
