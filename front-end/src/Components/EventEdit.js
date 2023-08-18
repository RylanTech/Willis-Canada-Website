import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Container, Form, Row } from "react-bootstrap"
import { EventContext } from "../Context/eventContext"
import AdminNavigationBar from "./AdminNavigationBar"

function EventEdit() {
    let params = useParams()
    let navigate = useNavigate()
    let [evnt, setEvnt] = useState({
        title: "",
        date: "",
        location: "",
        description: "",
        eventId: params.eventId
    })

    let { title, date, location, description, eventId } = evnt

    const { getEvent, editEvent } = useContext(EventContext)

    useEffect(() => {
        if (eventId === undefined) return
        async function fetch() {
            await getEvent(eventId)
                .then((event) => {
                    // event.date = new Date(event.date).toISOString()
                    setEvnt(event)
                })
        }
        fetch()
    }, [eventId])

    function handleChange(event) {
        setEvnt((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
      
        // Convert the local time back to UTC before submission
        const utcDate = convertToISOString(new Date(evnt.date));
      
        editEvent({ ...evnt, date: utcDate }).then(() =>
          navigate(`/admin/events`)
        );
      }

    function convertToISOString(localDate) {
        const offset = localDate.getTimezoneOffset() * 60000; // Offset in milliseconds
        const utcTime = localDate.getTime() - offset;
        return new Date(utcTime).toISOString().substr(0, 16);
    }

    function convertToLocalDate(utcString) {
        return new Date(utcString);
    }

    return (
        <>
            <AdminNavigationBar />
            <Container>
                <Row>
                    <div className="col-lg-2" />
                    <div className="col-12 col-lg-8">
                        <Form onSubmit={handleSubmit} style={{ color: "white", margin: "20px" }}>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" name="title" value={title} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" name="location" value={location} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    name="date"
                                    value={date ? convertToISOString(convertToLocalDate(date)) : ""}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group style={{ margin: "20px" }}>
                                <Form.Label>Description</Form.Label>
                                <textarea className="itemTA col-12" type="text" name="description" value={description} onChange={handleChange} />
                                {/* <Form.Control type="text" name="message" value={message} onChange={handleChange} /> */}
                            </Form.Group>
                            <Button type="submit">Edit</Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default EventEdit