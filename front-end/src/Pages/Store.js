import { Button, Card, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"
import { StoreItemContext } from "../Context/storeItemContext"
import { useContext, useEffect, useState } from "react"

function Store() {
    const [storeItems, setStoreItems] = useState("")
    const { getStoreItems } = useContext(StoreItemContext)

    useEffect(() => {
        async function verifing() {
            let itms = await getStoreItems()

            setStoreItems(itms)
        }
        verifing()
    }, [])

    function mappingStoreItems() {
        if (storeItems.length) {
            return storeItems.map((item) => {
                if (item.imageUrl.length > 3) {
                    return (
                        <div className="col-6" key={item.itemId}>
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
                        </div>
                    )
                } else {
                    return (
                        <div className="col-6" key={item.itemId}>
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
                        </div>
                    )
                }
            })
        } else {
            return (
                <center>
                    <h5>No Store Items</h5>
                </center>
            )
        }
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {mappingStoreItems()}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Store