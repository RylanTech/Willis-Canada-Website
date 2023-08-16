import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext()
let baseUrl = "http://localhost:3001/"

export const UserProvider = (props) => {
  const [user, setUser] = useState()
  
  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(baseUrl + "api/user/signin", user)
      .then(response => {
        setUser(user)
        localStorage.setItem('WCLogin', response.data)
        return new Promise(resolve => resolve(response.data));
      }
      );
  }

  function verify() {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('WCLogin')}`
    };
    return axios.post(baseUrl + "api/verify", null, {
      headers: myHeaders
    }).then(response => {
        return new Promise(resolve => resolve(response.data));
      })
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
    <UserContext.Provider
      value={{
        signInUser,
        // createUser,
        verify
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}