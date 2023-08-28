import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import { Button, Container, Form, Row } from "react-bootstrap"
import { PostContext } from "../Context/postContext"
import AdminNavigationBar from "./AdminNavigationBar"

function PostAdd() {
    let params = useParams()
    let navigate = useNavigate()
    let [post, setPost] = useState({
        title: "",
        message: "",
        postId: params.postId
    })

    let { title, message } = post

    const { addPost } = useContext(PostContext)

    // useEffect(() => {
    //     if (postId === undefined) return
    //     async function fetch() {
    //         await getPost(postId)
    //             .then((post) => {
    //                 setPost(post)
    //             })
    //     }
    //     fetch()
    // }, [postId])

    function handleChange(event) {
        setPost((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        addPost(post).then(() =>
          navigate(`/admin/posts`)
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
                                <Form.Label>Message</Form.Label>
                                <textarea className="itemTA col-12" type="text" name="message" value={message} onChange={handleChange} />
                                {/* <Form.Control type="text" name="message" value={message} onChange={handleChange} /> */}
                            </Form.Group>
                            <Button type="submit">Edit</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default PostAdd