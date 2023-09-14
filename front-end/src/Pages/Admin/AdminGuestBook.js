import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { GuestBookContext } from "../../Context/guestBookContext"

function AdminGuestBook() {
    const [unApproved, setUnApproved] = useState("")
    const [Approved, setApproved] = useState("")

    const { verify } = useContext(UserContext)
    const { getAllagb, getAlluagb, deletegb, approve, disApprove } = useContext(GuestBookContext)

    let navigate = useNavigate()

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            let approved = await getAllagb()
            let unApproved = await getAlluagb()

            const sortedApproved = approved.sort((b, a) => new Date(b.createdAt) - new Date(a.createdAt));
            const sortedUnApproved = unApproved.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            setApproved(sortedApproved)
            setUnApproved(sortedUnApproved)

            if (!status) {
                navigate("/")
            }
        }
        verifing()
    }, [])

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

    function mapUnApproved() {
        if (unApproved.length > 0) {
            return unApproved.map((unApp) => {
                return (
                    <div className="col-12" key={unApp.unApprovedId}>
                        <br />
                        <br />
                        <div className='overGbPost'>
                            <div className='gbPost'>
                                {unApp.name} <br />
                                {unApp.email}
                                <hr />
                                {unApp.message}
                                <hr />
                                Posted on: {convertUTCtoLocal(unApp.createdAt)}
                            </div>
                        </div>
                        <br />
                        <Row>
                        <Button className="col-6" onClick={() => {
                            approve(unApp.unApprovedId)
                            window.location.reload()
                        }}>Approve</Button>

                        <Button variant="danger" className="col-6" onClick={() => {
                            disApprove(unApp.unApprovedId)
                            window.location.reload()
                        }}>Disapprove</Button>
                        </Row>
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h3>None Submitted</h3>
                </center>
            )
        }
    }

    function mapApproved() {
        if (Approved.length > 0) {
            return Approved.map((app) => {
                return (
                    <div className="col-12" key={app.ApprovedId}>
                        <br />
                        <br />
                        <div className='overGbPost'>
                            <div className='gbPost'>
                                {app.name} <br />
                                {app.email}
                                <hr />
                                {app.message}
                                <hr />
                                Posted on: {convertUTCtoLocal(app.createdAt)}
                            </div>
                        </div>
                        <br />
                        <center>
                            <Button className="col-12" variant="danger" onClick={() => {
                                deletegb(app.ApprovedId)
                                window.location.reload()
                            }}>Delete</Button>
                        </center>
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h3>None Approved</h3>
                </center>
            )
        }
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <div className="col-6">
                        <center>
                            <h2>unApproved:</h2>
                            <h6>(Oldest to Newest)</h6>
                        </center>
                        <Row>
                            {mapUnApproved()}
                        </Row>
                    </div>
                    <div className="col-6">
                        <center>
                            <h2>Approved:</h2>
                            <h6>(Newest to Oldest)</h6>
                        </center>
                        <Row>
                            {mapApproved()}
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default AdminGuestBook