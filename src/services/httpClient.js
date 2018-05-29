import axios from 'axios';

// TODO: Replace this with actual JWT token from Keycloak

// Create axios instance for api calls
var instance = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + sessionStorage.jwt }
});

export const Get = (route, data) => (
    instance.get(route, data === {} ? null : JSON.stringify(data))
)
export const Post = (route,data,config) => (
    console.log("data come to post method is",data),
    instance.post(route, data,config)
)

export const Put = (route, data) => (
    instance.put(route, JSON.stringify(data))
)
