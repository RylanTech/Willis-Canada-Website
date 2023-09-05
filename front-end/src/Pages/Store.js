import { Button, Card, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"
import { StoreItemContext } from "../Context/storeItemContext"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Store() {
    const [storeItems, setStoreItems] = useState("")
    const { getStoreItems } = useContext(StoreItemContext)

    const storeItms = [
        {
            id: 1,
            title: "Beyond the cross",
            price: "30",
            description: `(DOUBLE CD: Which includes 17 tracks from Beyond The Cross & Reaching)
            WCCD150 - Beyond The Cross - Long Play CD (17 songs)`,
            songs: <p>
                Latter Rain
                He Always Does
                Angels Rejoice"
                The Service Begins
                Joy Beyond The Cross
                Can't You Feel His Spirit
                Somewhere Underneath The Blood

                Also Includes Willis Canada's "REACHING":

                Precious Lord
                Washed In The Blood
                Now The Sun Shines
                He'll Do It Again
                On Some Ordinary Day
                Homeland Look
                I Surrender All
                Lost In The Presence
                First Drop Of Blood
                What He Paid For
            </p>,
            imageUrl: "https://i.postimg.cc/pLmsV81L/Willis-Canada-Beyondthe-Cross-1.jpg",
            link: <>
                <input name="cmd" type="hidden" value="_cart" />
                <input name="business" type="hidden" value="willisc@mindspring.com" />
                <input name="item_name" type="hidden" value="Beyond The Cross - CD" />
                <input name="item_number" type="hidden" value="WCCD150" />
                <input name="amount" type="hidden" value="20.00" />
                <input name="no_note" type="hidden" value="1" />
                <input name="currency_code" type="hidden" value="USD" />
                <input name="add" type="hidden" value="1" />
            </>
        },
        {
            id: 2,
            title: "7 Cassette Special",
            price: "75",
            description: `(DOUBLE CD: Which includes 17 tracks from Beyond The Cross & Reaching)
            WCCD150 - Beyond The Cross - Long Play CD (17 songs)`,
            songs: <p>
                In The Garden
                Out Of The Blue
                Prayer of the Heart
                Beyond The Cross
                Reaching
                From The Heart Of Canada
                From Canada With Love
            </p>,
            link: <>
                <input name="cmd" type="hidden" value="_cart"/>
                <input name="business" type="hidden" value="willisc@mindspring.com"/>
                <input name="item_name" type="hidden" value="7 Cassette Special"/>
                <input name="item_number" type="hidden" value="WCCD155"/>
                <input name="amount" type="hidden" value="75.00"/>
                <input name="no_note" type="hidden" value="1"/>
                <input name="currency_code" type="hidden" value="USD"/>
                <input name="add" type="hidden" value="1"/>
            </>
        }
    ]


    useEffect(() => {
        async function verifing() {
            // let itms = await getStoreItems()

            setStoreItems(storeItms)
        }
        verifing()
    }, [])


    function mappingStoreItems() {
        if (storeItems.length) {
            return storeItems.map((item) => {
                if (item.imageUrl) {
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
                                    <Button className="col-12">
                                        <Link to={`/store/${item.id}`}>View</Link>
                                    </Button>
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
                                    <Button className="col-12">
                                        <Link to={`/store/${item.id}`}>View</Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            })
        } else {
            return (
                <center>
                    <h5>Come back later to see the store.</h5>
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