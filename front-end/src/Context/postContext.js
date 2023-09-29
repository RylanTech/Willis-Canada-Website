import axios from "axios";
import { createContext, useState } from "react";

export const PostContext = createContext()
// let baseUrl = "https://williscanadaapi.online/"
let baseUrl = "http://localhost:3001/"

export const PostProvider = (props) => {

    function getPosts() {
        return axios.get(baseUrl + "api/post/getall")
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getPost(postId) {
        return axios.get(baseUrl + `api/Post/${postId}`)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function addPost(post) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.post(baseUrl + "api/post/", post, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editPost(post) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.put(baseUrl + `api/Post/${post.postId}`, post, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function deletePost(postId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
        };

        return axios.delete(baseUrl + `api/post/${postId}`, {headers: myHeaders})
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );

    }

    return (
        <PostContext.Provider
            value={{
                addPost,
                getPosts,
                editPost,
                getPost,
                deletePost
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}