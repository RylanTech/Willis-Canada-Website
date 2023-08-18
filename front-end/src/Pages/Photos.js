import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { useContext, useEffect, useState } from "react"
import { PhotoContext } from "../Context/photoContext"

function Photos() {
    const { getPhotos } = useContext(PhotoContext)

    const [photos, setPhotos] = useState()

    useEffect(() => {
        async function fetch() {
            let phtos = await getPhotos()
            setPhotos(phtos)
        }
        fetch()
    }, [])

    function showAllPhotos() {
        if (photos) {
            const numRows = Math.ceil(photos.length / 2); // Calculate the number of rows needed

            const photoRows = [];

            for (let i = 0; i < numRows; i++) {
                const firstIndex = i * 2;
                const secondIndex = firstIndex + 1;

                const firstPhoto = photos[firstIndex];
                const secondPhoto = secondIndex < photos.length ? photos[secondIndex] : null;

                photoRows.push(
                    <Row key={i}>
                        <div className="col-6">
                            {firstPhoto && <img className="photosImg" src={firstPhoto.imageUrl} alt={`Photo ${firstIndex}`} />}
                        </div>
                        <div className="col-6">
                            {secondPhoto && <img className="photosImg" src={secondPhoto.imageUrl} alt={`Photo ${secondIndex}`} />}
                        </div>
                    </Row>
                );
            }
            return photoRows;
        }
    }



    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {/* <div className="col-6">
                        <img className="photosImg" src="https://images.unsplash.com/photo-1688236551531-370fdaf09984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691273553489-615e4279af43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691483059022-e8ad9f2d9d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1690987866346-9973ed5f4f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" />
                    </div>
                    <div className="col-6">
                        <img className="photosImg" src="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691228397653-41d0662abeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691525891769-832890088df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    </div> */}
                    {showAllPhotos()}

                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Photos