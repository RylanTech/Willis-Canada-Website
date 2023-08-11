import { Button, Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"

function Homepage() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="col-12 col-md-8">
                        <Carousel className="col-12">
                            <Carousel.Item>
                                <img className="caraImg" src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Willis Canada" />
                                <Carousel.Caption>
                                    You can add graphics here to display whatever you would like
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="caraImg" src="https://www.liquidsandsolids.com/wp-content/uploads/2022/09/How-a-Purple-Sky-Can-Affect-You-Emotionally.jpg" alt="Willis Canada" />
                                <Carousel.Caption>
                                    You can add graphics here to display whatever you would like
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="caraImg" src="https://images.unsplash.com/photo-1480449806965-eb8eabee75ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Willis Canada" />
                                <Carousel.Caption>
                                    You can add graphics here to display whatever you would like
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <Card className="infoCard">
                            <Card.Header as="h5">Text posts</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    You would be able to post text content here such as advertizing your mailing list, where you would be next and whatever else you would like.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="featured">
                            <center>
                                Featured
                            </center>
                        </div>
                        <Card className="HomeShopCard">
                            <Card.Header as="h5">Album or Single</Card.Header>
                            <Card.Header>
                                <center>
                                    <img className="HomeLefthandCardImg" src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                                </center>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    With the album cover as the photo, you could list your latest or favorite albums here to sell.
                                </Card.Text>
                                <Button className="featuredBtn">Buy</Button>
                            </Card.Body>
                        </Card>
                        <Card className="HomeShopCard">
                            <Card.Header as="h5">Album or Single</Card.Header>
                            <Card.Header>
                                <center>
                                    <img className="HomeLefthandCardImg" src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                                </center>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    With the album cover as the photo, you could list your latest or favorite albums here to sell.
                                </Card.Text>
                                <Button className="featuredBtn">Buy</Button>
                            </Card.Body>
                        </Card>
                        <Card className="HomeShopCard">
                            <Card.Header as="h5">Album or Single</Card.Header>
                            <Card.Header>
                                <center>
                                    <img className="HomeLefthandCardImg" src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
                                </center>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    With the album cover as the photo, you could list your latest or favorite albums here to sell.
                                </Card.Text>
                                <Button className="featuredBtn">Buy</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Homepage