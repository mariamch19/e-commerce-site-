import { Button, Container, Row } from "react-bootstrap"
import Itemcard from "./Itemcard"
import data from './data.jsx'
import Cart from './Cart'
import { CartProvider } from "react-use-cart"
import { useState } from "react"

const Home = () => {
    const [filter, setFilter] = useState(data.productData)

    const All = () => {
        setFilter(data.productData)
    }

    const Green = () => {
        const greenItems = data.productData.filter(item => item.color === "green")
        setFilter(greenItems)
    }

    const Yellow = () => {
        const yellowItems = data.productData.filter(item => item.color === "yellow")
        setFilter(yellowItems)
    }

    return (
        <CartProvider>
            <div style={{ marginTop: '20px' }}>
                <Container fluid>
                    <h1 className="text-center">All items</h1>
                    <div className="d-flex justify-content-center mb-3">
                        <Button variant="primary" onClick={() => All()}>All</Button>
                        <Button variant="success" onClick={() => Green()}>Green</Button>
                        <Button variant="warning" onClick={() => Yellow()}>Yellow</Button>
                    </div>
                    <Row md={4} className="justify-content-center">
                        {
                            filter.map((item, index) => (
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