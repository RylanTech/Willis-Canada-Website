import axios from "axios";
import { createContext, useState } from "react";

export const ItemContext = createContext()
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



    // function isLoggedIn() {
    //     let myHeaders = {
    //         Authorization: `Bearer ${localStorage.getItem('GroupPostLoginToken')}`
    //     };
    //     return axios.get(baseUrl + "api/user/isloggedin", {headers: myHeaders})
    //     .then(response => {
    //         return new Promise(resolve => resolve(response.data));
    //     }).catch((error) =>
    //     // new Promise((_, reject) => reject(error.response.statusText))
    //     new Promise((_, reject) => reject(error))
    //   )
    // }

    // function createUser(user) {
    //   return axios.post(baseUrl + "api/user", user)
    //     .then(response => {
    //       // refreshPosts(response.data.user.userId)
    //       return new Promise((resolve) => resolve(response.data))
    //     })
    // }

    return (
        <ItemContext.Provider
            value={{
                addItem,
                getItems,
                editItem,
                getItem
            }}
        >
            {props.children}
        </ItemContext.Provider>
    )
}