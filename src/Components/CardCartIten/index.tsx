import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./CardCartIten.scss";
import { useProvaider } from "../../Context/UserProvaider";
import { FormatCurry } from "../../Utils";
import { ArrayProduct, ProductsCart } from "../../Interface";


const CardCartIten = ({ data }: ArrayProduct) => {
    //responsavel por mostra quantidade do produto
    const [qtnIten, setQtnIten] = useState<number>(1);
    //desestruturando um objeto para passar as informações para o card
    const { id, name, photo, price } = data;
    //pegando o hook que esta no provaider
    const { setCartIten, cartiten } = useProvaider();
    //funçao que filtra os dados existentes e retorna um novo arrray de dados mas sem o item que foi apagado
    const HandleRemoveItem = (id: number): void => setCartIten(cartiten.filter((item) => item.id !== id));

    //funcao de add mais produtos no carrinho 
    const AddProductsCart = (id: number) => {
        const antigo = cartiten.filter((item) => item.id !== id)
        const NewIten: ProductsCart[] | [] = cartiten.filter((iten) => iten.id === id).map((item) => {

            if (item.id === id) {

                return {
                    ...item,
                    qtn: ++item.qtn

                }
            }
            return item
        })
        setCartIten([...antigo, NewIten[0]])
        setQtnIten(NewIten[0].qtn)
    }
    //funcao de add mais produtos no carrinho 
    const RemoveItemQtn = (id: number) => {
        const antigo = cartiten.filter((item) => item.id !== id)
        const NewIten: ProductsCart[] = cartiten.filter((iten) => iten.id === id).map((item) => {

            if (item.id === id) {
                return {
                    ...item,
                    qtn: --item.qtn
                }
            }
            return item
        })
        setCartIten([...antigo, NewIten[0]])
        setQtnIten(NewIten[0].qtn)
    }

    if (qtnIten <= 0) {
        HandleRemoveItem(id)
    }
    //variavel que armazena qualtidade para fazer calculo com preço
    const itenPrice = cartiten.filter((iten) => iten.id === id).map((iten) => iten.id === id ? iten.qtn
        : 1)

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
                            onClick={() => RemoveItemQtn(id)}
                        >-</button>
                        <span>{cartiten.filter((iten) => iten.id === id).map((iten) => iten.id === id ? iten.qtn
                            : 1)}</span>
                        <button
                            onClick={() => AddProductsCart(id)}>
                            +
                        </button>
                    </div>
                </div>

                <div className="box-valor">
                    <h3>{FormatCurry(Number(price) * itenPrice[0])}</h3>
                </div>
            </div>
        </div>
    );
}
export default CardCartIten;
