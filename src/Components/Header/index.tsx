import React from "react";
import { BiCart } from "react-icons/bi";
import "./Header.scss";
import { useProvaider } from "../../Context/UserProvaider";

const Header = () => {
    const { setCart, cartiten } = useProvaider();

    const QtnProdutoTotal = cartiten.reduce((acc, item) => {return  acc + item.qtn}, 0)

    return (
        <header className="heading_logo">
            <h1>MKS<span>sistemas</span></h1>

            <button onClick={() => setCart(true)}>
                <BiCart />

                {
                    QtnProdutoTotal
                }
            </button>
        </header>
    );
};
export default Header;
