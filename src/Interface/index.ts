export type FetchProduct = {
    products: [{
        id: number,
        name: string,
        description: string,
        photo: string,
        price: string
    }]
}
export type Products = {
    id: number,
    name: string,
    description: string,
    photo: string,
    price: string

}
export type TypeProvaider = {

    products: Products[]
    setProducts: React.Dispatch<React.SetStateAction<Products[]>>
    cartiten: Products[]
    setCartIten: React.Dispatch<React.SetStateAction<Products[]>>
    cart: boolean,
    setCart: React.Dispatch<React.SetStateAction<boolean>>

}

export type ChildrenProps = {

    children: React.ReactNode
}

export type ArrayProduct = {

    data: {
        id: number,
        name: string,
        description: string,
        photo: string,
        price: string,
    }

}