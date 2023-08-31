import { Button, Card, Container, Row } from "react-bootstrap"
import AdminNavigationBar from "../../Components/AdminNavigationBar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { EventContext } from "../../Context/eventContext"

function AdminEvent() {
    const { verify } = useContext(UserContext)
    const { getEvents, deleteEvent } = useContext(EventContext)

    const [events, setEvents] = useState("")

    let navigate = useNavigate();

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }
            let evnts = await getEvents()
            evnts = evnts.sort((a, b) => new Date(a.date) - new Date(b.date));
            setEvents(evnts)
        }
        verifing();
    }, [])

    function convertToUTC(dateString) {
        const date = new Date(dateString);
        const utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        return utcDate;
    }

    function formatDateToWord(date) {
        const months = [
          "January", "February", "March", "April",
          "May", "June", "July", "August",
          "September", "October", "November", "December"
        ];
      
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const amPm = hour >= 12 ? 'pm' : 'am';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      
        let daySuffix;
        if (day === 1 || day === 21 || day === 31) {
          daySuffix = "st";
        } else if (day === 2 || day === 22) {
          daySuffix = "nd";
        } else if (day === 3 || day === 23) {
          daySuffix = "rd";
        } else {
          daySuffix = "th";
        }
      
        const formattedDate = `${month} ${day}${daySuffix} at ${formattedHour}:${minute < 10 ? '0' : ''}${minute}${amPm}`;
        
        return formattedDate;
      }

    function postingEvent() {
        if (events.length) {
            return events.map((event) => {
                console.log(event.date)
                let date = formatDateToWord(convertToUTC(new Date(event.date)))
                return (
                    <div key={event.eventId}>
                        <div className="col-xl-2" />
                        <div className="event col-12 col-xl-8">
                            <div className="textInEvent">
                                <h5>{event.title}</h5>
                                <p>
                                    {date}
                                    <br/>
                                    Location: {event.location}
                                </p>
                                <p>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2" />
                        <center>
                            <Link to={`/admin/events/edit/${event.eventId}`}>
                                <Button className="fbtn">Edit</Button>
                            </Link>
                            <Button onClick={() => {
                                deleteEvent(event.eventId).then(() => {
                                    window.location.reload()
                                })
                            }} className="fbtn" variant="danger">Delete</Button>
                        </center>
                        <hr />
                    </div>
                )
            })
        } else {
            return (
                <center>
                    <h5>No Events</h5>
                    <hr/>
                </center>
            )
        }
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="col-12 col-md-8">
                            {postingEvent()}
                        </div>
                    </center>
                </Row>
                <Row>
                    <center>
                        <Link to={`/admin/events/add`}>
                            <Button>
                                Add Event
                            </Button>
                        </Link>
                    </center>
                </Row>
            </Container>
        </>
    )
}
export default AdminEvent