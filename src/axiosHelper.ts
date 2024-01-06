import axios from 'axios';
import {
    useContext
} from "react";
import { AUTH_TOKEN_KEY } from './providers/AuthProvider';
import { AuthContext } from './providers/AuthProvider';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// FIXME: define interfaces for all the various request types
export const request = (method: string, url: string, data: any) => {
    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    let headers = {};
    console.log(headers);
    console.log(authToken);
    console.log(authToken !== 'undefined');
    if (authToken !== null && authToken !== "null" && authToken !== 'undefined') {
        headers = {"Authorization": `Bearer ${authToken}`}
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });
}