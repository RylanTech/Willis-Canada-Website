import axios from "axios";
import { createContext } from "react";

export const UserContext = createContext()
// let baseUrl = "https://williscanadaapi.online/"
let baseUrl = "http://localhost:3001/"

export const UserProvider = (props) => {
  
  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(baseUrl + "api/user/signin", user)
      .then(response => {
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

  return (
    <UserContext.Provider
      value={{
        signInUser,
        verify
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}