import axios from "axios";

export const GetAllPosts = (skip = 0, take = 10) => {
    return axios('https://jsonplaceholder.typicode.com/posts');

}
