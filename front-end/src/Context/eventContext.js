import axios from "axios";
import { createContext } from "react";

export const EventContext = createContext()
// let baseUrl = "https://williscanadaapi.online/"
let baseUrl = "http://localhost:3001/"

export const EventProvider = (props) => {

    function getEvents() {
        return axios.get(baseUrl + "api/event/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getEvent(eventId) {
        return axios.get(baseUrl + `api/event/${eventId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addEvent(event) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/event/", event, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editEvent(event) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/event/${event.eventId}`, event, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteEvent(eventId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/event/${eventId}`, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <EventContext.Provider
            value={{
                addEvent,
                getEvents,
                editEvent,
                getEvent,
                deleteEvent
            }}
        >
            {props.children}
        </EventContext.Provider>
    )
}