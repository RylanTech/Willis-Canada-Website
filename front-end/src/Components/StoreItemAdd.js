import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemContext } from "../Context/itemContext"
import { Button, Container, Form, Row } from "react-bootstrap"
import AdminNavigationBar from "./AdminNavigationBar"
import { StoreItemContext } from "../Context/storeItemContext"

function StoreItemAdd() {
    let params = useParams()
    let navigate = useNavigate()
    let [item, setItem] = useState({
        title: "",
        description: " ",
        price: "",
        storeitemId: params.storeitemId,
        imageUrl: "",
        link: ""
    })

    let { title, description, price, storeitemId, imageUrl, link } = item

    const { addStoreItem } = useContext(StoreItemContext)

    // useEffect(() => {
    //     if (storeitemId === undefined) return
    //     async function fetch() {
    //         await getStoreItem(params.storeitemId)
    //             .then((item) => {
    //                 setItem(item)
    //             })
    //     }
    //     fetch()
    // }, [storeitemId])

    function handleChange(event) {
        setItem((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addStoreItem(item).then(() =>
          navigate(`/admin/store`)
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
                                <Form.Label>Link</Form.Label>
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
export default StoreItemAdd