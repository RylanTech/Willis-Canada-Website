import axios from "axios";
import { createContext, useState } from "react";

export const ItemContext = createContext()
// let baseUrl = "https://williscanadaapi.online/"
let baseUrl = "http://localhost:3001/"

export const ItemProvider = (props) => {

    function getItems() {

        return axios.get(baseUrl + "api/item/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getItem(itemId) {

        return axios.get(baseUrl + `api/item/${itemId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addItem(item) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        if (item.releaseDate === "") {
            delete item.releaseDate
        }

        return axios.post(baseUrl + "api/item/", item, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editItem(item) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/item/${item.itemId}`, item, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteItem(itemId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/item/${itemId}`, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <ItemContext.Provider
            value={{
                addItem,
                getItems,
                editItem,
                getItem,
                deleteItem
            }}
        >
            {props.children}
        </ItemContext.Provider>
    )
}