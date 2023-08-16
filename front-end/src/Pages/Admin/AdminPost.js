import { Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect } from "react"
import { UserContext } from "../../Context/userContext"
import { useNavigate } from "react-router-dom"

function AdminPost() {
    const { verify } = useContext(UserContext)

    let navigate = useNavigate()

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }
        }
        verifing()
    },[])

    


    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    Hello
                </Row>
            </Container>
        </>
    )
}
export default AdminPost