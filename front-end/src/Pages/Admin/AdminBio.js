import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { BioContext } from "../../Context/bioContext"

function AdminBio() {
    const { verify } = useContext(UserContext)
    const { getBio } = useContext(BioContext)

    const [posts, setPosts] = useState("")

    let navigate = useNavigate();

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }
            let psts = await getBio()
            setPosts(psts)
        }
        verifing();
    }, [])

    function bio() {
        if (posts.length) {
            return posts.map((post) => {
                const formattedMessage = post.bioText.replace(/\n/g, '<br>');
                return (
                    <div key={post.bioId}>
                        <Row className="infoCard">
                    <div className="bioRow">
                        <Row>
                            <img className="col-12 col-md-4 willisCanadaBioImg" src={post.bioImg} />
                            <div className="col-12 col-md-8">
                                <p className="bioHeading">Biography</p>
                                <br/>
                                <p>
                                <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
                                </p>
                           </div>
                        </Row>
                    </div>
                </Row>
                        <center>
                            <Link to={`/admin/bio/edit/${post.bioId}`}>
                                <Button className="fbtn">Edit</Button>
                            </Link>
                        </center>
                        <hr />
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h5>Error</h5>
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
                            {bio()}
                        </div>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminBio