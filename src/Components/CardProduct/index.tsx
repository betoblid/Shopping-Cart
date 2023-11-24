import React from "react";
import "./CardProduct.scss";
import { BiCalendarAlt } from "react-icons/bi";
import { ArrayProduct, ProductsCart } from "../../Interface";
import { useProvaider } from "../../Context/UserProvaider";
import { FormatCurry } from "../../Utils";

const CardProduct = ({ data }: ArrayProduct) => {

    //o hook que é fornecido pelo provaider é onde fica armazenado nossos objetos produtos que foi comprados
    const { setCartIten, cartiten } = useProvaider();
    //desestrutura um objeto e passa as informações para o card
    const { description, id, name, photo, price } = data;
    //function que adiciona nosso produto dentro do hook cartinten
    //const HandleAddCart = () => setCartIten([...cartiten, data]);


    const HandleAddCartProduct = (id: number) => {
        //verificar se existe
        const checkExit = cartiten.find((iten) => iten.id === id)
        //condição caso existe
        if (checkExit) {
            //nova lista acrecentando mais produtos
            const NewsData = cartiten.map((item) => {

                if (item.id === id) {
                    return {
                        ...item,
                        qtn: ++item.qtn
                    }
                }
                return item
            })
            setCartIten(NewsData)
            return;
        }
        //newData percorre o array e retorna com um valor novo qtn onde será manipulado quantos produtos
        const newData: ProductsCart[] = [data].map((item) => {
            return {
                ...item,
                qtn: 0
            }
        })
        //adiciona mais um produto no carrinho
        const QtnAddNew = newData.map((iten) => {

            iten.qtn++
            return {
                ...iten,
            }
        })
        setCartIten([...cartiten, QtnAddNew[0]])
    }
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
                onClick={() => HandleAddCartProduct(id)}
            > <BiCalendarAlt />
                Comprar
            </button>
        </section>
    );
}
export default CardProduct;
