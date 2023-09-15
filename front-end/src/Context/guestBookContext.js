import axios from "axios";
import { createContext } from "react";

export const GuestBookContext = createContext()
let baseUrl = "https://williscanadaapi.online/"

export const GuestBookProvider = (props) => {

    function getAllagb() {
        return axios.get(baseUrl + "api/guestbook/getallagb")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getAlluagb() {
        return axios.get(baseUrl + "api/guestbook/getalluagb")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function approve(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`,
        };

        return axios.get(baseUrl + `api/guestbook/approve/${id}`, { headers: myHeaders })
        .then(response => {
          return new Promise(resolve => resolve(response.data));
        });
    }

    function disApprove(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.get(baseUrl + `api/guestbook/disapprove/${id}`, { headers: myHeaders })
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function adduagb(post) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/guestbook/", post, { headers: myHeaders })
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deletegb(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/guestbook/${id}`, { headers: myHeaders })
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <GuestBookContext.Provider
            value={{
                adduagb,
                getAllagb,
                getAlluagb,
                deletegb,
                approve,
                disApprove
            }}
        >
            {props.children}
        </GuestBookContext.Provider>
    )
}