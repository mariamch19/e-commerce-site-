import { Button, Card, Row } from "react-bootstrap"
import { useCart } from "react-use-cart"

const Cart = (props) =>{
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart()

    if(isEmpty) return <b>Card is empty</b>
    return (
        <>
        <b>Cart ({ totalUniqueItems }) items: { totalItems }</b>
        <Row className="justify-content-center">
            {
                items.map((item, index) => (
                <Card style={{ width: '18rem' }} key={ index }>
                <Card.Img variant="top" src={ item.img } />
                <Card.Body>
                    <Card.Title>{ item.title }</Card.Title>
                    <Card.Text>Price: { item.price }$</Card.Text>
                    <Card.Text>quantity: { item.quantity }</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" onClick={() =>updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                        <Button variant="primary" onClick={() =>updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                        <Button variant="danger" onClick={() => removeItem(item.id)}>Delete from card</Button>
                    </div>
                </Card.Body>
                </Card>
                ))
            }
        </Row>
        <h1 className="text-right">Total price: { cartTotal }$</h1>
        </>
    )
}

export default Cart