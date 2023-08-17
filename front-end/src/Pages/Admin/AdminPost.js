import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { PostContext } from "../../Context/postContext"

function AdminPost() {
    const { verify } = useContext(UserContext)
    const { getPosts, deletePost } = useContext(PostContext)

    const [posts, setPosts] = useState()

    let navigate = useNavigate();

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }
            let psts = await getPosts()
            setPosts(psts)
        }
        verifing();
    },[])

    function postingPosts() {
        if (posts) {
            return posts.map((post) => {
                return (
                    <>
                    <Card className="infoCard">
                        <Card.Header as="h5">{post.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {post.message}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <center>
                    <Link to={`/admin/posts/edit/${post.postId}`}>
                    <Button className="fbtn">Edit</Button>
                    </Link>
                    <Button onClick={() => {
                        deletePost(post.postId).then(() => {
                            window.location.reload()
                        })
                    }} className="fbtn" variant="danger">Delete</Button>
                </center>
                <hr/>
                </>
                )
            })
        }
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="col-12 col-md-8 adminPosts">
                        {postingPosts()}
                        </div>
                    </center>
                </Row>
                <Row>
                    <center>
                        <Link to={`/admin/posts/add`}>
                            <Button>
                                Add Post
                            </Button>
                        </Link>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminPost