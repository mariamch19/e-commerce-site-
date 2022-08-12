import { Container, Row } from "react-bootstrap"
import Itemcard from "./Itemcard"
import data from './data.jsx'
import Cart from './Cart'
import { CartProvider } from "react-use-cart"

const Home = () => {
    return (
        <CartProvider>
            <div style={{ marginTop: '20px' }}>
                <Container fluid>
                    <h1 className="text-center">All items</h1>
                    <Row md={4} className="justify-content-center">
                        {
                            data.productData.map((item, index) => (
                                <Itemcard img={item.img} title={item.title} salary={item.price} item={item} key={index} />
                            ))
                        }
                    </Row>
                    <hr />
                    <h1 className="text-center">Card</h1>
                    <Cart />
                </Container>
            </div>
        </CartProvider>
    )
}

export default Home