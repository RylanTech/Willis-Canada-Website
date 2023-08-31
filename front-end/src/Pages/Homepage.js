import { Button, Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../Context/itemContext"
import { PostContext } from "../Context/postContext"
import { SlideContext } from "../Context/slideContext"

function Homepage() {
    const [items, setItems] = useState("")
    const [posts, setPosts] = useState("")
    const [slides, setSlides] = useState("")

    const { getItems } = useContext(ItemContext)
    const { getPosts } = useContext(PostContext)
    const { getSlides } = useContext(SlideContext)

    useEffect(() => {
        async function gettingInfo() {
            let itms = await getItems()
            setItems(itms)

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
                <center>
                    No Slides
                </center>
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
                return (
                    <Card className="infoCard" key={post.postId}>
                        <Card.Header as="h5">{post.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {addLinkToText(post.message)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        } else {
            return (
                <Card className="infoCard">
                    <Card.Header as="h5">No Posts</Card.Header>
                </Card>
            )
        }
    }

    function shoppingItems() {
        if (items.length) {
            return items.map((item) => {
                if (item.imageUrl.length > 3) {
                    return (
                        <Card className="HomeShopCard" key={item.itemId}>
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
                                <Button target="_blank" href={item.link} className="featuredBtn">Buy</Button>
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
                                <Button target="_blank" href={item.link} className="featuredBtn">Buy</Button>
                            </Card.Body>
                        </Card>
                    )
                }
            })
        } else {
            return (
                <center>
                    No Featured Items
                </center>
            )
        }
    }
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="col-12 col-md-8">
                        <Carousel className="col-12">
                            {carouselSlide()}
                        </Carousel>
                        <center>
                        <br/>
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
                        <div className="featured">
                            <center>
                                Featured
                            </center>
                        </div>
                        {shoppingItems()}
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Homepage