import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { PostContext } from "../../Context/postContext"

function AdminPost() {
    const { verify } = useContext(UserContext)
    const { getPosts, deletePost } = useContext(PostContext)

    const [posts, setPosts] = useState("")

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
    }, [])

    function postingPosts() {
        console.log(posts)
        if (posts.length) {
            return posts.map((post) => {
                const formattedMessage = post.message.replace(/\n/g, '<br>');
                return (
                    <div key={post.postId}>
                        <Card className="infoCard">
                            <Card.Header as="h5">{post.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
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
                        <hr />
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h5>No Posts</h5>
                    <hr/>
                </center>
            )
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