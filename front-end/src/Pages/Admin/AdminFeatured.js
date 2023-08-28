import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { ItemContext } from "../../Context/itemContext"

function AdminFeatured() {
    const [items, setItems] = useState("")

    const { verify } = useContext(UserContext)
    const { getItems, deleteItem } = useContext(ItemContext)

    let navigate = useNavigate()

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            let itms = await getItems()

            setItems(itms)

            if (!status) {
                navigate("/")
            }
        }
        verifing()
    }, [])

    function shoppingItems() {
        if (items.length) {
            return items.map((item) => {
                if (item.imageUrl.length > 3) {
                    return (
                        <div className="col-12" key={item.itemId}>
                            <Card className="HomeShopCard">
                                <Card.Header>
                                    <h5>{item.title}</h5>
                                    ${item.price}
                                </Card.Header>
                                <Card.Header>
                                    <center>
                                        <img className="HomeLefthandCardImg" src={item.imageUrl} />
                                    </center>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button target="_blank" href={item.link} className="featuredBtn">Buy</Button>
                                </Card.Body>
                            </Card>
                            <center>
                                <Link to={`/admin/featured/edit/${item.itemId}`}>
                                    <Button className="fbtn">Edit</Button>
                                </Link>
                                <Button onClick={() => {
                                    deleteItem(item.itemId).then(() => {
                                        window.location.reload()
                                    })
                                }} className="fbtn" variant="danger">Delete</Button>
                            </center>
                            <hr />
                        </div>
                    )
                } else {
                    return (
                        <div className="col-12" key={item.itemId}>
                            <Card className="HomeShopCard" key={item.itemId}>
                                <Card.Header>
                                    <h5>{item.title}</h5>
                                    {item.price}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button target="_blank" href={item.link} className="featuredBtn">Buy</Button>
                                </Card.Body>
                            </Card>
                            <center>
                                <Link to={`/admin/featured/edit/${item.itemId}`}>
                                    <Button className="fbtn">Edit</Button>
                                </Link>
                                <Button onClick={() => {
                                    deleteItem(item.itemId).then(() => {
                                        window.location.reload()
                                    })
                                }} className="fbtn" variant="danger">Delete</Button>
                            </center>
                            <hr />
                        </div>
                    )
                }
            })
        } else {
            return (
                <center>
                    <h5>No Featured Items</h5>
                    <hr/>
                </center>
            )
        }
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="col-12 col-md-4 adminShopCards">
                            {shoppingItems()}
                        </div>
                    </center>
                </Row>
                <Row>
                    <center>
                        <Link to={`/admin/featured/add`}>
                            <Button>
                                Add Item
                            </Button>
                        </Link>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminFeatured