import { useContext, useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import { UserContext, UserProvider } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";


function AdminLogin() {
    document.body.style = 'background: black';
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const { signInUser } = useContext(UserContext)

    const navigate = useNavigate()

    async function handleSubmit() {
        signInUser(username, password).then(() => {
            navigate("/admin/Posts")
        })
    }


    return (
        <>
            <Container>
                <Row>
                    <center>
                        <br /><br /><br /><br />
                        <form>
                            <label>Username:
                                <br />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            <br /><br />
                            <label>Password:
                                <br />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            <br /><br />
                            <Button onClick={handleSubmit}>Submit</Button>
                        </form>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminLogin