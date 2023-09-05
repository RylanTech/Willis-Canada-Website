import { useParams } from "react-router-dom"
import NavigationBar from "../Components/NavigationBar"
import { useEffect, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"

function Items() {
    let params = useParams()

    const [data, setData] = useState({
        id: 0,
        title: "",
        price: 0,
        description: "",
        imageUrl: undefined,
        songs: "",
        link: ""
    })

    const storeItems = [
        {
            id: 1,
            title: "Beyond the cross",
            price: "30",
            description: `(DOUBLE CD: Which includes 17 tracks from Beyond The Cross & Reaching)
            WCCD150 - Beyond The Cross - Long Play CD (17 songs)`,
            songs: <p>
                Latter Rain<br/>
                He Always Does<br/>
                Angels Rejoice<br/>
                The Service Begins<br/>
                Joy Beyond The Cross<br/>
                Can't You Feel His Spirit<br/>
                Somewhere Underneath The Blood<br/><br/>

                Also Includes Willis Canada's "REACHING":<br/><br/>

                Precious Lord<br/>
                Washed In The Blood<br/>
                Now The Sun Shines<br/>
                He'll Do It Again<br/>
                On Some Ordinary Day<br/>
                Homeland Look<br/>
                I Surrender All<br/>
                Lost In The Presence<br/>
                First Drop Of Blood<br/>
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
        async function startUp() {
            // Convert params.id to a number since it's usually a string
            const itemId = parseInt(params.id);

            // Use the Array.prototype.find method to find the item by id
            const foundItem = await storeItems.find((item) => item.id === itemId);

            // Update the state with the found item (or null if not found)
            setData(foundItem);
        }
        startUp()
    }, [params.id]);

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {data.imageUrl ? (
                        <>
                            <div className="col-12 col-md-6">
                                <h1>{data.title}</h1>
                                <h2>${data.price}</h2>
                                <br />
                                <p>{data.description}</p>
                                <br />
                                <p>{data.songs}</p>
                                <Row>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                                    <Button type="submit" className="col-12">
                                            {data.link}
                                            Buy
                                    </Button>
                                    </form>
                                </Row>
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="col-12 storePhoto" src={data.imageUrl} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-md-2"/>
                            <div className="col-12 col-md-6">
                                <h1>{data.title}</h1>
                                <h2>${data.price}</h2>
                                <br />
                                <p>{data.description}</p>
                                <br />
                                <p>{data.songs}</p>

                            </div>
                            <div className="col-12 col-md-2 buyButtonNoImg">
                                <Row>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                                    <Button className="col-12">
                                            {data.link}
                                            Buy
                                    </Button>
                                    </form>
                                </Row>
                            </div>
                        </>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default Items