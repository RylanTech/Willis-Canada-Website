import axios from "axios";
import { createContext, useState } from "react";

export const SlideContext = createContext()
let baseUrl = "https://williscanadaapi.online/"

export const SlideProvider = (props) => {

    function getSlides() {
        return axios.get(baseUrl + "api/slide/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getSlide(slideId) {
        return axios.get(baseUrl + `api/slide/${slideId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addSlide(slide) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/slide/", slide, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editSlide(slide) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/slide/${slide.slideId}`, slide, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteSlide(slideId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/slide/${slideId}`, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <SlideContext.Provider
            value={{
                addSlide,
                getSlides,
                editSlide,
                getSlide,
                deleteSlide
            }}
        >
            {props.children}
        </SlideContext.Provider>
    )
}