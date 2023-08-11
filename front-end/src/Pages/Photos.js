import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"

function Photos() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="col-6">
                        <img className="photosImg" src="https://images.unsplash.com/photo-1688236551531-370fdaf09984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691273553489-615e4279af43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691483059022-e8ad9f2d9d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1690987866346-9973ed5f4f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" />
                    </div>
                    <div className="col-6">
                        <img className="photosImg" src="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691228397653-41d0662abeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
                        <img className="photosImg" src="https://images.unsplash.com/photo-1691525891769-832890088df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                    </div>

                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default Photos