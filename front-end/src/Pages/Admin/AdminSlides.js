import { Button, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { SlideContext } from "../../Context/slideContext"

function AdminSlides() {
    const [slides, setSlides] = useState()

    const { verify } = useContext(UserContext)
    const { getSlides, deleteSlide } = useContext(SlideContext)

    let navigate = useNavigate()

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }

            let slds = await getSlides()
            setSlides(slds)
        }
        verifing()
    }, [])

    function carouselSlide() {
        if (slides) {
            return slides.map((slide) => {
                return (
                    <>
                        <Row>
                            <div className="col-12 col-md-8">
                                <img className="editSlideImg" src={slide.imageUrl} />
                            </div>
                            <div className="slideMessage col-12 col-md-4">
                                <p className="slideMsg">{slide.message}</p>
                            </div>
                        </Row>
                        <center>
                            <div className="slideBtns">
                                <Link to={`/admin/slides/edit/${slide.slideId}`}>
                                    <Button className="fbtn">Edit</Button>
                                </Link>
                                <Button onClick={() => {
                                    deleteSlide(slide.slideId)
                                    window.location.reload()
                                }} className="fbtn" variant="danger">Delete</Button>
                            </div>
                        </center>
                        <hr />
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
                    {carouselSlide()}
                </Row>
                <Row>
                    <center>
                        <Link to={`/admin/slides/add`}>
                            <Button>
                                Add Slide
                            </Button>
                        </Link>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminSlides