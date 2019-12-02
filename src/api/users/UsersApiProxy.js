import axios from "axios";

export const GetAllUsers = (skip = 0, take = 10) => {
    return axios('https://jsonplaceholder.typicode.com/users');

}

export const GetUserById = (userId) => {
    return axios('https://jsonplaceholder.typicode.com/users/' + userId)
}

