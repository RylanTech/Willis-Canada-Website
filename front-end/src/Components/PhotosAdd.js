import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Form, Row } from "react-bootstrap"
import AdminNavigationBar from "./AdminNavigationBar"
import { PhotoContext } from "../Context/photoContext"

function PhotosAdd() {
    let params = useParams()
    let navigate = useNavigate()
    let [photo, setPhoto] = useState({
        imageUrl: "",
        photosId: params.photosId
    })

    let { imageUrl, photosId } = photo

    const { addPhoto } = useContext(PhotoContext)

    // useEffect(() => {
    //     if (photosId === undefined) return
    //     async function fetch() {
    //         await getPhoto(photosId)
    //             .then((photo) => {
    //                 setPhoto(photo)
    //             })
    //     }
    //     fetch()
    // }, [photosId])

    function handleChange(event) {
        setPhoto((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addPhoto(photo).then(() =>
          navigate(`/admin/photos`)
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
                            <Button type="submit">Add</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default PhotosAdd