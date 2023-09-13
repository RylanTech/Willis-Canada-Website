import { Button, Container, Form, Row } from 'react-bootstrap'
import NavigationBar from '../Components/NavigationBar'
import { useEffect, useState } from 'react'
function GuestBook() {
    const [name, setName] = useState("Name")
    const [email, setEmail] = useState("Email")
    const [message, setMessage] = useState("Message")

    const posts = [
        {
            name: "Rylan W",
            email: "rylanworkman9@gmail.com",
            message: "Hello there!"
        }
    ]


    useEffect(() => {

    }, [])

    async function handleSubmit() {

    }

    function mapGuestBook() {
        return posts.map((post) => {
            return (
                <>
                    <br/>
                    <div className='overGbPost'>
                        <div className='gbPost'>
                            {post.name} <br />
                            {post.email}
                            <hr />
                            {post.message}
                        </div>
                    </div>
                </>
            )
        })
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="gbHeaderOver">
                            <h2 className="gbHeader">
                                Guest Book
                            </h2>
                        </div>
                    </center>
                    <Row>
                        <Form className='col-12 col-md-6'>
                            <Form.Group className=''>
                                <Form.Label>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className=''>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className=''>
                                <br />
                                <Form.Label>
                                    Message
                                </Form.Label>
                                <textarea
                                    className='col-12'
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        <br />
                        <div className='col-12 col-md-6'>
                            Your post:
                            <div className='overGbPost'>
                                <div className='gbPost'>
                                    {name} <br />
                                    {email}
                                    <hr />
                                    {message}
                                </div>
                            </div>
                        </div>
                        <center>
                            Your post will be reviewed before posted<br />
                            <Button onClick={handleSubmit}>Post</Button>
                        </center>
                    </Row>
                </Row>
                <Row>
                    <div className='col-md-2'/>
                    <div className='col-12 col-md-8'>
                    {mapGuestBook()}
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default GuestBook