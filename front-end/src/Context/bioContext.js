import axios from "axios";
import { createContext } from "react";

export const BioContext = createContext()
// let baseUrl = "https://williscanadaapi.online/"
let baseUrl = "http://localhost:3001/"

export const BioProvider = (props) => {

    function getBio() {
        return axios.get(baseUrl + `api/bio/`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }


    function editBio(Bio) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/Bio/${Bio.bioId}`, Bio, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    return (
        <BioContext.Provider
            value={{
                editBio,
                getBio
            }}
        >
            {props.children}
        </BioContext.Provider>
    )
}