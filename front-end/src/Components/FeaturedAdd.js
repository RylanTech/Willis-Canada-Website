import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemContext } from "../Context/itemContext"
import NavigationBar from "./NavigationBar"
import { Button, Container, Form, Row } from "react-bootstrap"
import AdminNavigationBar from "./AdminNavigationBar"

function FeaturedAdd() {
    let params = useParams()
    let navigate = useNavigate()
    let [item, setItem] = useState({
        title: "",
        description: "",
        price: "",
        itemId: params.itemId,
        imageUrl: "",
        releaseDate: "",
        link: ""
    })

    let { title, description, price, itemId, imageUrl, releaseDate, link } = item

    const { getItem, addItem } = useContext(ItemContext)

    // useEffect(() => {
    //     if (itemId === undefined) return
    //     async function fetch() {
    //         await getItem(params.itemId)
    //             .then((item) => {
    //                 setItem(item)
    //             })
    //     }
    //     fetch()
    // }, [itemId])

    function handleChange(event) {
        setItem((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        addItem(item).then(() =>
          navigate(`/admin/featured`)
        )
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <div className="col-lg-2" />
                    <div className="col-12 col-lg-8">
                        <Form onSubmit={handleSubmit} style={{ color: "white", margin: "20px" }}>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={title} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Price</Form.Label>
                                <Row>
                                    <div className="col-1 cashs">
                                        $
                                    </div>
                                    <div className="col-11">
                                        <Form.Control type="number" name="price" value={price} onChange={handleChange} />

                                    </div>
                                </Row>
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>imageUrl</Form.Label>
                                <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Link to buy</Form.Label>
                                <Form.Control type="text" name="link" value={link} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Description</Form.Label>
                                <br />
                                <textarea className="itemTA col-12" type="text" name="description" value={description} onChange={handleChange} />
                                {/* <Form.Control type="text" name="description" value={description} onChange={handleChange} /> */}
                            </Form.Group>
                            <Button type="submit">Add</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default FeaturedAdd