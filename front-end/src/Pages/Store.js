import { Button, Card, Container, Row } from "react-bootstrap"
import Footer from "../Components/Footer"
import NavigationBar from "../Components/NavigationBar"

function Store() {
    let Items = [
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
            ImageUrl: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            releaseDate: new Date().toString(),
            description: "description",
            price: "$20"
        }
    ]

    function storeItems() {
        return Items.map((item) => {
            return (
                <div className="col-12 col-md-6 col-xxl-4">
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
                </div>
            )
        })
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {storeItems()}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Store