import { Button, Container, Form, Row } from 'react-bootstrap'
import NavigationBar from '../Components/NavigationBar'
import { useContext, useEffect, useState } from 'react'
import { GuestBookContext } from '../Context/guestBookContext'
function GuestBook() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSent, setMessageSent] = useState(null)
    const [posts, setPosts] = useState()

    const { getAllagb, adduagb } = useContext(GuestBookContext)

    useEffect(() => {
        async function start() {
            const psts = await getAllagb()
            const sortedPosts = psts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedPosts)
        }
        start()
    }, [])

    async function handleSubmit() {
        const post = {
            name: name,
            email: email,
            message: message
        }
        const response = await adduagb(post)
        if (response === false) {
            setMessageSent(false)
        } else {
            setMessageSent(true)
            setName("")
            setEmail("")
            setMessage("")
        }
    }


    function convertUTCtoLocal(utcTimestamp) {
        const date = new Date(utcTimestamp); // Parse the UTC timestamp

        // Get the user's timezone offset in minutes
        const userTimezoneOffset = date.getTimezoneOffset();

        // Adjust the date for the user's timezone
        const localDate = new Date(date.getTime() - userTimezoneOffset * 60000);

        // Format the local date and time as a readable string
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            //   second: '2-digit',
            timeZoneName: 'short',
        };

        return localDate.toLocaleString(undefined, options);
    }

    function mapGuestBook() {
        if (posts) {
            return posts.map((post) => {
                return (
                    <div key={post.ApprovedId}>
                        <br />
                        <div className='overGbPost'>
                            <div className='gbPost'>
                                {post.name} <br />
                                {post.email}
                                <hr />
                                {post.message}
                                <br />
                                {convertUTCtoLocal(post.createdAt)}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    function isMessageSent() {
        if (messageSent === null) {
            return (
                <>
                    Your post:
                    <div className='overGbPost'>
                        <div className='gbPost'>
                            {name} <br />
                            {email}
                            <hr />
                            {message}
                        </div>
                    </div>
                    <center>
                        Your post will be reviewed before posted<br />
                        <Button onClick={handleSubmit}>Post</Button>
                    </center>
                </>
            )
        } else if (messageSent === false) {
            return (
                <>
                    <center>
                        <h2>An error has occurred<br />Please make sure all fields are entered</h2>

                    </center>
                </>
            )
        } else {
            return (
                <>
                    <center>
                        <h2>Sent!</h2>
                    </center>
                </>
            )
        }
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
                        <div className='col-12 col-md-4'>
                        <Form>
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
                        <div className='col-12'>
                            {isMessageSent()}
                        </div>
                        </div>
                        <div className='col-12 col-md-8'>
                            {mapGuestBook()}
                        </div>
                    </Row>
                </Row>
            </Container >
        </>
    )
}
export default GuestBook