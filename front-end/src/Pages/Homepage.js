import { Button, Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../Context/itemContext"
import { PostContext } from "../Context/postContext"
import { SlideContext } from "../Context/slideContext"
import { Link } from "react-router-dom"

function Homepage() {
    const [items, setItems] = useState("")
    const [posts, setPosts] = useState("")
    const [slides, setSlides] = useState("")
    const [slideCol, setSlideCol] = useState("col-12 col-md-8")

    // const { getItems } = useContext(ItemContext)
    const { getPosts } = useContext(PostContext)
    const { getSlides } = useContext(SlideContext)

    const storeItems = [
        {
            id: 1,
            title: "BEYOND THE CROSS - (CD & Cassette)",
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
        },{
            id: 12,
            title: "WAYMAKER",
            price: "$20",
            description: "",
            imageUrl: "https://i.postimg.cc/s21cqyLC/waymaker-front.jpg",
            imageUrl2: "https://i.postimg.cc/ZRSW3xps/waymaker-back.jpg",
            songs: <p>
                Heaven Sounding Sweeter<br />
                I am Redeemed<br />
                Break Every Chain<br />
                Use Me Lord<br />
                Trust Me
            </p>,
            link: {
                CD: <>
                    <input name="cmd" type="hidden" value="_s-xclick" />
                    <input name="hosted_button_id" type="hidden" value="JH3XYZQA9E5FL" />
                    <img alt="" border="0" height="1" src="./Latest Releases_files/pixel.gif" width="1" />
                </>
            }
        }
    ]

    useEffect(() => {
        async function gettingInfo() {
            // let itms = await getItems()
            setItems(storeItems)

            let psts = await getPosts()
            setPosts(psts)

            let slds = await getSlides()
            setSlides(slds)


        }
        gettingInfo()
    }, [])

    function carouselSlide() {
        if (slides.length) {
            return slides.map((slide) => {
                return (
                    <Carousel.Item key={slide.slideId}>
                        <img className="caraImg" src={slide.imageUrl} alt="Willis Canada" />
                        <Carousel.Caption>
                            {slide.message}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        } else {
            return (
                <></>
            )
        }
    }

    function postingPosts() {
        function addLinkToText(inputString) {
            const urlRegex = /(https?:\/\/[^\s]+)/g;

            const modifiedString = inputString.replace(urlRegex, (match) => {
                return `<a href="${match}" target="_blank">${match}</a>`;
            });

            return <span dangerouslySetInnerHTML={{ __html: modifiedString }} />;
        }

        if (posts.length) {
            return posts.map((post) => {
                const formattedMessage = post.message.replace(/\n/g, '<br>');
                return (
                    <Card className="infoCard" key={post.postId}>
                        <Card.Header as="h5">{post.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {addLinkToText(formattedMessage)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        } else {
            return (
                <></>
            )
        }
    }

    function shoppingItems() {
        function mapThroughItems() {
            if (items.length === 0) {
                setSlideCol("col-12")
            }
            return items.map((item) => {
                if (item.imageUrl) {
                    return (
                        <Card className="HomeShopCard" key={item.title}>
                            <Card.Header>
                                <h5>{item.title}</h5>
                                {item.price}
                            </Card.Header>
                            <Card.Header>
                                <center>
                                    <img className="HomeLefthandCardImg" src={item.imageUrl} alt={item.title} />
                                </center>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Link to={`/store/${item.id}`}>
                                    <Button className="col-12">View</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    )
                } else {
                    return (
                        <Card className="HomeShopCard" key={item.itemId}>
                            <Card.Header>
                                <h5>{item.title}</h5>
                                {item.price}
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal">
                                    <Button className="col-12" type="submit">

                                        {item.link}
                                        Buy
                                    </Button>
                                </form>
                            </Card.Body>
                        </Card>
                    )
                }
            })
        }

        if (items.length) {
            return (
                <>
                    <div className="featured">
                        <center>
                            Featured
                        </center>
                    </div>
                    {mapThroughItems()}
                </>
            )
        } else {
            return <></>
        }
    }
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className={slideCol}>
                        <Carousel>
                            {carouselSlide()}
                        </Carousel>
                        <center>
                            <br />
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input name="cmd" type="hidden" value="_s-xclick" />
                                <input name="hosted_button_id" type="hidden" value="QNNKVRYK3UXQ8" />
                                <input alt="PayPal - The safer, easier way to pay online!" border="0" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" />
                                <img alt="" border="0" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" />
                            </form>
                        </center>
                        {postingPosts()}

                    </div>
                    <div className="col-12 col-md-4">
                        {shoppingItems()}
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Homepage