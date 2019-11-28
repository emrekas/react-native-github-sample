import axios from "axios";

export const GetAll = (skip = 0, take = 10) => {
    return axios('https://jsonplaceholder.typicode.com/posts');

}
