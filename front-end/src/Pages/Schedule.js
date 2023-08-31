import { Container, Row } from "react-bootstrap"
import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import React, { useContext, useEffect, useState } from 'react';
import { EventContext } from "../Context/eventContext";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

function Schedule() {
    const { getEvents } = useContext(EventContext)
    const { verify } = useContext(UserContext)

    const [events, setEvents] = useState("")

    let navigate = useNavigate()

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

        const formattedDate = `${month} ${day}${daySuffix} at ${formattedHour}:${minute < 10 ? '0' : ''}${minute}${amPm} ${year}`;

        return formattedDate;
    }

    function EventList() {
        if (events.length) {
            return events.map((event) => {
                let date = formatDateToWord(convertToUTC(new Date(event.date)))
                return (
                    <>
                        <div className="col-xl-2" />
                        <div className="event col-12 col-xl-8">
                            <div className="textInEvent">
                                <h5>{event.title}</h5>
                                <p>
                                    {date}
                                    <br />
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
                    <div className="col-xl-2" />
                    <div className="col-12 col-xl-8">
                        <div className="event">
                            <h5>No events right now</h5>
                        </div>
                    </div>
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