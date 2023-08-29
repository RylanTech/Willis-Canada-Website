import axios from "axios";
import { createContext } from "react";

export const PhotoContext = createContext()
let baseUrl = "http://williscanadaapi.online/"

export const PhotoProvider = (props) => {

    function getPhotos() {
        return axios.get(baseUrl + "api/photo/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getPhoto(photoId) {
        return axios.get(baseUrl + `api/photo/${photoId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addPhoto(photo) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/photo/", photo, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editPhoto(photo) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/photo/${photo.photosId}`, photo, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deletePhoto(photoId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/photo/${photoId}`, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <PhotoContext.Provider
            value={{
                addPhoto,
                getPhotos,
                editPhoto,
                getPhoto,
                deletePhoto
            }}
        >
            {props.children}
        </PhotoContext.Provider>
    )
}