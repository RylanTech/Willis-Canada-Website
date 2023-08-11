import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import React from 'react';

function Schedule() {
    let events = [
        {
            title: "Title",
            time: "1pm",
            description: "this is a desription for an event",
            location: "location",
            day: new Date()
        },
        {
            title: "Title",
            time: "1pm",
            description: "this is a desription for an event",
            location: "location",
            day: new Date()
        }
    ]

    function EventList() {
        if (events !== undefined) {
            return events.map((event) => {
                let eventStringArray = event.day.toString().split(" ")
                let eventString = `${eventStringArray[0]} ${eventStringArray[1]} ${eventStringArray[2]}`
                return (
                    <>
                        <div className="col-xl-2" />
                        <div className="event col-12 col-xl-8">
                            <div className="textInEvent">
                                <h5>{event.title}</h5>
                                <p>
                                    {eventString} at {event.time}
                                    <br/>
                                    Location: {event.location}
                                </p>
                                <p>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2" />
                    </>
                )
            })
        } else {
            return (
                <center>
                    <h2>No events right now</h2>
                </center>
            )
        }
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <center>
                        <div className="eventHeaderOver">
                            <h2 className="eventHeader">
                                Events
                            </h2>
                        </div>
                    </center>
                    {EventList()}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Schedule