import axios from "axios";
import { createContext } from "react";

export const StoreItemContext = createContext()
let baseUrl = "http://localhost:3001/"

export const StoreItemProvider = (props) => {

    function getStoreItems() {

        return axios.get(baseUrl + "api/item/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getStoreItem(itemId) {

        return axios.get(baseUrl + `api/item/${itemId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addStoreItem(item) {
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

    function editStoreItem(item) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/item/${item.itemId}`, item, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteStoreItem(itemId) {
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
        <StoreItemContext.Provider
            value={{
                addStoreItem,
                getStoreItems,
                editStoreItem,
                getStoreItem,
                deleteStoreItem
            }}
        >
            {props.children}
        </StoreItemContext.Provider>
    )
}