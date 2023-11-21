import { IoIosCloseCircle } from "react-icons/io";
import "./CartComponet.scss";
import { useProvaider } from "../../Context/UserProvaider";
import { FormatCurry } from "../../Utils";
import CardIten from "../CardCartIten";

const CartComponet = () => {

    const { setCart, cartiten } = useProvaider();

    const TotalCompra = cartiten.reduce((acc, iten) => { return Number(iten.price) + acc }, 0);
    return (
        <div className="card_carrinho">
            <div className="box_info-card row">
                <div className="info-card">
                    <h2>Carrinho de Compras</h2>
                </div>
                <div className="btn-cart">
                    <button
                        onClick={() => setCart(false)}>
                        <IoIosCloseCircle />
                    </button>
                </div>
            </div>

            <div className="centro">

                {cartiten.map((items) => <CardIten key={items.id} data={items} />)}

            </div>

            <div className="box-info-compra">
                <div className="info-compra">
                    <h3>Total: </h3>
                    <span>
                        {FormatCurry(Number(TotalCompra))
                        }</span>
                </div>
                <button
                    className="btn-compra"
                    onClick={() => alert("Estamos em manutenção")}>Finalizar Compra</button>
            </div>
        </div>
    );
}
export default CartComponet;
