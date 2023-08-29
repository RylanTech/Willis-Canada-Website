import axios from "axios";
import { createContext } from "react";

export const StoreItemContext = createContext()
let baseUrl = "http://williscanadaapi.online/"

export const StoreItemProvider = (props) => {

    function getStoreItems() {

        return axios.get(baseUrl + "api/storeitem/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getStoreItem(itemId) {

        return axios.get(baseUrl + `api/storeitem/${itemId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addStoreItem(item) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/storeitem/", item, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editStoreItem(item) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/storeitem/${item.itemId}`, item, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deleteStoreItem(itemId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/storeitem/${itemId}`, {headers: myHeaders})
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