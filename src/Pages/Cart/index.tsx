import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Container from '../../Components/Container';
import { useQuery } from "react-query";
import "./Cart.scss";
import { useProvaider } from '../../Context/UserProvaider';
import { FetchProductsApi } from '../../Api/FetchProductsApi';
import CartComponet from '../../Components/CartComponet';
import Loanding from '../../Components/Loanding';
import CardProduct from '../../Components/CardProduct';

function Cart() {

    const { cart, setProducts, products } = useProvaider();
    const { data, status } = useQuery("produtos", () => {
        FetchProductsApi().then(response => setProducts(response.products));
    })

    return (
        <>
            {cart == true && <CartComponet />}
            <Header />
            <Container>

                <div className='secao'>
                    <div className='container_products row'>

                        {status == "loading" && <Loanding />}

                        {status == "success" && products.map((iten) => <CardProduct key={iten.id} data={iten} />)}
                    </div>
                </div>
            </Container>
            <Footer />
        </ >
    );
}
export default Cart;
