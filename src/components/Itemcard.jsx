import { Button, Card } from "react-bootstrap"
import { useCart } from 'react-use-cart'

const Itemcard = (props) => {
    const { addItem } = useCart()

    return (
        <>
        <Card style={{ width: '18rem' }} key={props.id}>
        <Card.Img variant="top" src={ props.img } />
        <Card.Body>
            <Card.Title>{ props.title }</Card.Title>
            <Card.Text>{ props.salary }$</Card.Text>
            <Button variant="success" onClick={() => addItem(props.item)}>Add to card</Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default Itemcard