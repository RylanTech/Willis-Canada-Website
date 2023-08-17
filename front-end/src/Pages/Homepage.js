import { Button, Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { ItemContext } from "../Context/itemContext"
import { PostContext } from "../Context/postContext"
import { SlideContext } from "../Context/slideContext"

function Homepage() {
    const [items, setItems] = useState()
    const [posts, setPosts] = useState()
    const [slides, setSlides] = useState()

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
        if (slides) {
            return slides.map((slide) => {
                return (
                    <Carousel.Item>
                        <img className="caraImg" src={slide.imageUrl} alt="Willis Canada" />
                        <Carousel.Caption>
                            {slide.message}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
    }

    function postingPosts() {
        if (posts) {
            return posts.map((post) => {
                return (
                    <Card className="infoCard">
                        <Card.Header as="h5">{post.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {post.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        }
    }

    function shoppingItems() {
        if (items) {
            return items.map((item) => {
                if (item.imageUrl.length > 3) {
                    return (
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
                                <Button target="_blank" href={item.link} className="featuredBtn">Buy</Button>
                            </Card.Body>
                        </Card>
                    )
                } else {
                    return (
                        <Card className="HomeShopCard">
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
                <div>
                    No Featured Items
                </div>
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