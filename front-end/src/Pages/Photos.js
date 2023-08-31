import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { PhotoContext } from "../Context/photoContext"

function Photos() {
    const { getPhotos } = useContext(PhotoContext)

    const [photos, setPhotos] = useState("")

    useEffect(() => {
        async function fetch() {
            let phtos = await getPhotos()
            setPhotos(phtos)
        }
        fetch()
    }, [])
    
    function showAllPhotos() {
        if (photos.length) {
            const evenPhotos = photos.filter((_, index) => index % 2 === 0);
            const oddPhotos = photos.filter((_, index) => index % 2 !== 0);
    
            return (
                <Row>
                    <div className="col-6">
                        {evenPhotos.map((photo, index) => (
                            <img className="photosImg" key={index} src={photo.imageUrl} alt={`Photo ${index * 2}`} />
                        ))}
                    </div>
                    <div className="col-6">
                        {oddPhotos.map((photo, index) => (
                            <img className="photosImg" key={index} src={photo.imageUrl} alt={`Photo ${index * 2 + 1}`} />
                        ))}
                    </div>
                </Row>
            );
        } else {
            return (
                <center>
                    <h5>No Photos.. yet</h5>
                    <hr />
                </center>
            );
        }
    }
    



    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {showAllPhotos()}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Photos