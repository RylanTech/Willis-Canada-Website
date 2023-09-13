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
            title: "WCCD130 - BEYOND THE CROSS - (CD & Cassette)",
            price: "CD - $20 | Cassette $12",
            description: `(DOUBLE CD: Which includes 17 tracks from Beyond The Cross & Reaching)
            WCCD150 - Beyond The Cross - Long Play CD (17 songs)`,
            songs: <p>
                Latter Rain<br />
                He Always Does<br />
                Angels Rejoice<br />
                The Service Begins<br />
                Joy Beyond The Cross<br />
                Can't You Feel His Spirit<br />
                Somewhere Underneath The Blood<br />

                Also Includes Willis Canada's "REACHING":<br /><br />

                Precious Lord<br />
                Washed In The Blood<br />
                Now The Sun Shines<br />
                He'll Do It Again<br />
                On Some Ordinary Day<br />
                Homeland Look<br />
                I Surrender All<br />
                Lost In The Presence<br />
                First Drop Of Blood<br />
                What He Paid For<br />
            </p>,
            imageUrl: "https://i.postimg.cc/pLmsV81L/Willis-Canada-Beyondthe-Cross-1.jpg",
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Beyond The Cross - CD" />
                    <input name="item_number" type="hidden" value="WCCD150" />
                    <input name="amount" type="hidden" value="20.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="BEYOND THE CROSS - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS120" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>

            }
        },
        {
            id: 2,
            title: "7 Cassette Special",
            price: "$75",
            description: "",
            songs: <p>
                In The Garden<br />
                Out Of The Blue<br />
                Prayer of the Heart<br />
                Beyond The Cross<br />
                Reaching<br />
                From The Heart Of Canada<br />
                From Canada With Love<br />
            </p>,
            link: {
                Cassetes: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="7 Cassette Special" />
                    <input name="item_number" type="hidden" value="WCCD155" />
                    <input name="amount" type="hidden" value="75.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        ,
        {
            id: 12,
            title: "Waymaker",
            price: "$20",
            description: "",
            imageUrl: "https://i.postimg.cc/s21cqyLC/waymaker-front.jpg",
            imageUrl2: "https://i.postimg.cc/ZRSW3xps/waymaker-back.jpg",
            songs: <p>
                Heaven Sounding Sweeter<br />
                I am Redeemed<br />
                Break Every Chain<br />
                Use Me Lord<br />
                Thank You Lord<br/>
                Trust Me
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_s-xclick" />
                    <input name="hosted_button_id" type="hidden" value="JH3XYZQA9E5FL" />
                    <img alt="" border="0" height="1" src="./Latest Releases_files/pixel.gif" width="1" />
                </>
            }
        },
        {
            id: 13,
            title: "Grace and Mercy",
            price: "$20",
            description: "",
            imageUrl2: "https://i.postimg.cc/155WxL4B/willisbackcover01.jpg",
            imageUrl: "https://i.postimg.cc/5tvgqJk4/Willisfron-Cover01.jpg",
            songs: <p>
                I Know a Place<br/>
                Moses Take Your Shoes Off<br/>
                God Come Through<br/>
                By and By<br/>
                I Can't Even Walk<br/>
                Where Would I Be<br/>
                I Know the Lord Will Make Always<br/>
                Your Grace and Mercy
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_s-xclick" />
                    <input name="hosted_button_id" type="hidden" value="NHSHZCNUHBWEG" />
                </>
            }
        },
        {
            id: 3,
            title: "Video WCVHS600 - Willis Canada - 2001 (VHS & DVD)",
            price: "$30",
            description: "",
            songs: <p>
                My Jesus Keep Me Satisfied<br />
                One Day Closer<br />
                Use His Name<br />
                Every Humble Knee Must Bow<br />
                It's The Love of Jesus<br />
                He Is<br />
                God Just Wants Your Praise<br />
                Jesus I Love You<br />
                Standing by the Well<br />
                This is the Wind<br />
                Tell Your Problems About Jesus<br />
            </p>,
            link:
            {
                VHS: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Willis Canada 2001 - VHS" />
                    <input name="item_number" type="hidden" value="WCV600" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                DVS: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Willis Canada 2001 - DVD" />
                    <input name="item_number" type="hidden" value="WCDVD600" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 4,
            title: "Video WCVHS700 - Willis Canada - Live (VHS & DVD)",
            price: "$30",
            description: "",
            songs: <p>
                Joy Beyond the Cross<br />
                Lost in the Presence<br />
                Somewhere Underneath the Blood<br />
                I Found A Lily<br />
                Sealed to the Day of Redemption<br />
                Latter Rain<br />
                The Service Begins<br />
                Now the Sun Shines<br />
                Angels Rejoice<br />
                He Always Does<br />
            </p>,
            link: {
                VHS: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Willis Canada Live - VHS" />
                    <input name="item_number" type="hidden" value="WCVHS700" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                DVD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Willis Canada Live - DVD" />
                    <input name="item_number" type="hidden" value="WCDVD700" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 5,
            title: "Video WCVHS800 - Teddy Huffam and the Gems - Live (VHS & DVD)",
            price: "$30",
            description: "",
            songs: <p>
                What a Lovely Name<br />
                Joy of Jesus<br />
                Just a Little Talk with Jesus<br />
                What a Sunrise<br />
                Glory Road<br />
                I'm Rich<br />
                Through it All<br />
                It's All Over Now<br />
                Gone<br />
            </p>,
            link: {
                VHS: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Teddy Huffam Live - VHS" />
                    <input name="item_number" type="hidden" value="WCVHS800" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                DVD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Teddy Huffam Live - DVD" />
                    <input name="item_number" type="hidden" value="WCDVDS800" />
                    <input name="amount" type="hidden" value="30.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 6,
            title: "WCCD205 - In the Garden - CD & Cassette",
            price: "CD - $20 | Cassete - $12",
            description: "",
            imageUrl: "https://i.postimg.cc/MKwVJm0S/WC.jpg",
            songs: <p>
                In The Garden<br />
                Near the Cross<br />
                Love Lifted Me<br />
                The Old Rugged Cross<br />
                What a Day<br />
                In Times Like These<br />
                In the Garden<br />
                Never Alone<br />
                Sweet Hour of Prayer<br />
                I'll Meet You by the River<br />
                Just a Little Talk with Jesus<br />
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="In the Garden - CD" />
                    <input name="item_number" type="hidden" value="WCCD205" />
                    <input name="amount" type="hidden" value="20.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="In the Garden - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS205" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 7,
            title: "WCCD125 - Out of the Blue - (CD & Cassete)",
            price: "CD - $20 | Cassette - $12",
            description: "",
            songs: <p>
                My Jesus Keep me Satisfied<br />
                One Day Closer<br />
                He's Gonna Do it Again<br />
                God Just Want Your Praise<br />
                Use His Name<br />
                Every Humble Knee Must Bow<br />
                Out of the Blue<br />
                He'll Put a Hallelujah In Your Heart<br />
                It's the Love of Jesus<br />
                He Is<br />
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Out of the Blue - CD" />
                    <input name="item_number" type="hidden" value="WCCD125" />
                    <input name="amount" type="hidden" value="20.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>,
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Out of the Blue - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS125" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 8,
            title: "WCCD120 - Prayer of the Heart - (CD & Cassette)",
            price: "CD - $20 | Cassette - $13",
            description: "",
            imageUrl: "https://i.postimg.cc/fT5KHrGF/s-l1200.webp",
            songs: <p>
                This Is The Wind<br />
                When I Lay This Old Rugged Cross Down<br />
                Standing By The Well
                Jesus I Love You<br />
                Tell Your Problems About Jesus<br />
                White As Snow<br />
                Isn't It Good<br />
                Oh, How I Love Jesus<br />
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Prayer of the Heart - CD" />
                    <input name="item_number" type="hidden" value="WCCD120" />
                    <input name="amount" type="hidden" value="20.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input alt="Make payments with PayPal - it's fast, free and secure!" border="0" name="submit" src="./Store_files/cd.gif" type="image" />
                    <input name="add" type="hidden" value="1" />
                </>,
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="Prayer of the Heart - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS120" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 9,
            title: "WCCAS135 - REACHING - (Cassette)",
            price: "$12",
            description: "",
            songs: <p>
                Washed In The Blood<br />
                Now The Sun Shines<br />
                Do It Again<br />
                On Some Ordinary Day<br />
                That Homeland Look<br />
                I Surrender All<br />
                Lost In The Presence<br />
                First Drop Of Blood<br />
                What He Paid For<br />
            </p>,
            link: {
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="REACHING - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS135" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 10,
            title: "WCCAS140 - FROM THE HEART OF CANADA - Cassette",
            price: "$12",
            description: "",
            songs: <p>
                He's My Lily Of The Valley<br />
                We Will Understand It Better<br />
                Search Me Lord<br />
                He's My Everything<br />
                Sealed To The Day Of Redemption<br />
                I Don't Know Why<br />
                Where Could I Go<br />
                When The Saints Go Marching In<br />
                There Is Something Within Me<br />
            </p>,
            link: {
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="FROM THE HEART OF CANADA - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS140" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
        },
        {
            id: 11,
            title: "WCCAS145 - FROM CANADA WITH LOVE - Cassette",
            price: "$12",
            description: "",
            songs: <p>
                I Will Serve Thee<br />
                Look At The Nail Scarred Hands<br />
                Love Can Move Mountains<br />
                How Can I Love Him More<br />
                Amazing Grace<br />
                Please Help Me Jesus<br />
                Just Like Heaven To Me<br />
                Someday<br />
                Follow Me<br />
                Peace In The Valley<br />
            </p>,
            link: {
                Cassette: <>
                    <input name="cmd" type="hidden" value="_cart" />
                    <input name="business" type="hidden" value="willisc@mindspring.com" />
                    <input name="item_name" type="hidden" value="FROM CANADA WITH LOVE - Cassette" />
                    <input name="item_number" type="hidden" value="WCCAS145" />
                    <input name="amount" type="hidden" value="12.00" />
                    <input name="no_note" type="hidden" value="1" />
                    <input name="currency_code" type="hidden" value="USD" />
                    <input name="add" type="hidden" value="1" />
                </>
            }
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
            const evenItems = storeItems.filter((_, index) => index % 2 === 0);
            const oddItems = storeItems.filter((_, index) => index % 2 !== 0);

            return (
                <Row>
                    <div className="col-lg-2" />
                    <div className="col-6 col-lg-4">
                        {evenItems.map((item) => {
                            if (item.imageUrl) {
                                return (
                                    <div className="col-12" key={item.itemId}>
                                        <Card className="HomeShopCard">
                                            <Card.Header>
                                                <h5>{item.title}</h5>
                                                {item.price}
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
                                                <Link to={`/store/${item.id}`}><Button className="col-12">View</Button></Link>
                                            </Card.Body>
                                        </Card>
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
                                                <Link to={`/store/${item.id}`}><Button className="col-12">View</Button></Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="col-6 col-lg-4">
                        {
                            oddItems.map((item) => {
                                if (item.imageUrl) {
                                    return (
                                        <div className="col-12" key={item.itemId}>
                                            <Card className="HomeShopCard">
                                                <Card.Header>
                                                    <h5>{item.title}</h5>
                                                    {item.price}
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
                                                    <Link to={`/store/${item.id}`}><Button className="col-12">View</Button></Link>
                                                </Card.Body>
                                            </Card>
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
                                                    <Link to={`/store/${item.id}`}><Button className="col-12">View</Button></Link>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </Row>
            )
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