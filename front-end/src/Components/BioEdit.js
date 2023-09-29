import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Form, Row } from "react-bootstrap"
import { PostContext } from "../Context/postContext"
import AdminNavigationBar from "./AdminNavigationBar"
import { BioContext } from "../Context/bioContext"

function BioEdit() {
    let params = useParams()
    let navigate = useNavigate()
    let [post, setPost] = useState({
        bioImg: "",
        bioText: "",
        bioId: params.bioId
    })

    let { bioText, bioImg, bioId } = post

    const { getBio, editBio } = useContext(BioContext)

    useEffect(() => {
        if (bioId === undefined) {
            
        }
        async function fetch() {
            await getBio()
                .then((post) => {
                    setPost(post[0])
                    console.log(post)
                })
        }
        fetch()
    }, [bioId])

    function handleChange(event) {
        setPost((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        editBio(post).then(() =>
          navigate(`/admin/bio`)
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
                                <Form.Control type="text" name="bioImg" value={bioImg} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Bio</Form.Label>
                                <textarea className="itemTA col-12" rows={16} type="text" name="bioText" value={bioText} onChange={handleChange} />
                            </Form.Group>
                            <Button type="submit">Edit</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default BioEdit