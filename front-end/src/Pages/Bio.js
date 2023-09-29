import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { BioContext } from "../Context/bioContext"
import { useNavigate } from "react-router-dom"

function Bio() {
    const { getBio } = useContext(BioContext)

    const [posts, setPosts] = useState("")

    useEffect(() => {
        async function verifing() {
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
                                    <img className="col-12 col-md-4 willisCanadaBioImg" src="https://cress.gigsalad.com/s3/w/willis_canada_orlando/57977c93799b8_480_sq" />
                                    <div className="col-12 col-md-8">
                                        <p className="bioHeading">Biography</p>
                                        <br />
                                        <p>
                                            <div dangerouslySetInnerHTML={{ __html: formattedMessage }} />
                                        </p>
                                    </div>
                                </Row>
                            </div>
                        </Row>
                        <hr />
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h5>Error</h5>
                    <hr />
                </center>
            )
        }
    }

    return (
        <>
            <NavigationBar />
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
export default Bio