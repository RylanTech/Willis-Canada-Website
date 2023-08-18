import { Button, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { PhotoContext } from "../../Context/photoContext"

function AdminPhotos() {
    const [photos, setPhotos] = useState()

    const { verify } = useContext(UserContext)
    const { getPhotos, deletePhoto } = useContext(PhotoContext)

    let navigate = useNavigate()

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }

            let phtos = await getPhotos()
            setPhotos(phtos)
        }
        verifing()
    }, [])

    function carouselPhotos() {
        if (photos) {
            return photos.map((photo) => {
                return (
                    <div key={photo.photosId}>
                        <center>
                        <Row>
                            <div className="col-md-2"/>
                            <div className="col-12 col-md-8">
                                <img className="editPhotoImg" src={photo.imageUrl} />
                            </div>
                        </Row>
                            <div className="slideBtns">
                                <Link to={`/admin/photos/edit/${photo.photosId}`}>
                                    <Button className="fbtn">Edit</Button>
                                </Link>
                                <Button onClick={() => {
                                    deletePhoto(photo.photosId)
                                    window.location.reload()
                                }} className="fbtn" variant="danger">Delete</Button>
                            </div>
                        </center>
                        <hr />
                    </div>
                )
            })
        }
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    {carouselPhotos()}
                </Row>
                <Row>
                    <center>
                        <Link to={`/admin/photos/add`}>
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
export default AdminPhotos