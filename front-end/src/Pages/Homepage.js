import { Button, Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"

function Homepage() {
    let slides = [
        {
            imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            message: "You can add graphics here to display whatever you would like"
        },
        {
            imageUrl: "https://www.liquidsandsolids.com/wp-content/uploads/2022/09/How-a-Purple-Sky-Can-Affect-You-Emotionally.jpg",
            message: "You can add graphics here to display whatever you would like"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1480449806965-eb8eabee75ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
    ]

    let posts = [
        {
            title: "Text post",
            message: "You would be able to post text content here such as advertizing your mailing list, where you would be next and whatever else you would like."
        }
    ]

    let items = [
        {
            title: "Album",
            link: "https://google.com",
            ImageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            releaseDate: new Date().toString(),
            description: "description",
            price: "$20"
        },
        {
            title: "Album",
            link: "https://google.com",
            ImageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            releaseDate: new Date().toString(),
            description: "description",
            price: "$20"
        },
        {
            title: "Album",
            link: "https://google.com",
            ImageUrl: "",
            releaseDate: new Date().toString(),
            description: "description",
            price: "$20"
        }
    ]

    function carouselSlide() {
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

    function postingPosts() {
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

    function shoppingItems() {
        return items.map((item) => {
            if (item.ImageUrl.length > 3) {
                return (
                    <Card className="HomeShopCard">
                            <Card.Header>
                                <h5>{item.title}</h5>
                                {item.price}
                            </Card.Header>
                            <Card.Header>
                                <center>
                                    <img className="HomeLefthandCardImg" src={item.ImageUrl}/>
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