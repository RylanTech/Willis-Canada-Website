import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Form, Row } from "react-bootstrap"
import AdminNavigationBar from "./AdminNavigationBar"
import { SlideContext } from "../Context/slideContext"

function SlideAdd() {
    let params = useParams()
    let navigate = useNavigate()
    let [slide, setSlide] = useState({
        imageUrl: "",
        message: "",
        slideId: params.slideId
    })

    let { imageUrl, message, slideId } = slide

    const { addSlide } = useContext(SlideContext)

    // useEffect(() => {
    //     if (slideId === undefined) return
    //     async function fetch() {
    //         await getSlide(slideId)
    //             .then((slide) => {
    //                 setSlide(slide)
    //             })
    //     }
    //     fetch()
    // }, [slideId])

    function handleChange(event) {
        setSlide((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addSlide(slide).then(() =>
          navigate(`/admin/slides`)
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
                                <Form.Label>ImageUrl</Form.Label>
                                <Form.Control type="text" name="imageUrl" value={imageUrl} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Message</Form.Label>
                                <textarea placeholder="Not required" className="itemTA col-12" type="text" name="message" value={message} onChange={handleChange} />
                                {/* <Form.Control type="text" name="message" value={message} onChange={handleChange} /> */}
                            </Form.Group>
                            <Button type="submit">Add</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default SlideAdd