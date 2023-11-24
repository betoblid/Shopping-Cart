import React, { useState } from "react";
import { ChildrenProps, Products, ProductsCart } from "../Interface";
import { MyProvider } from "./Context";

const Provaider = ({ children }: ChildrenProps) => {
    //hook que recebe os dados da api
    const [products, setProducts] = useState<Products[]>([]);
    //hook que guarda todos os itens que foi clicado para comprar
    const [cartiten, setCartIten] = useState<ProductsCart[] | []>([]);
    //hook que fala se o componente cart está ou não a mostra
    const [cart, setCart] = useState<boolean>(false);

    return (
        <MyProvider.Provider
            value={{ products, setProducts, cartiten, setCartIten, cart, setCart }}>
            {children}
        </MyProvider.Provider>

    );
}
export default Provaider;
