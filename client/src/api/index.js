import axios from "axios";

const userUrl = "http://localhost:8080/AllUsers";
const craftUrl = "http://localhost:8080/AllOnlyCrafts";
const materialsUrl = "http://localhost:8080/AllCrafts";
const itemsUrl = "http://localhost:8080/AllItems";
const itemUrl = "http://localhost:8080/Item/"

export const fetchUsers = () => axios.get(userUrl);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.get();
// export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const fetchCrafts = () => axios.get(craftUrl);
export const fetchMaterials = () => axios.get(materialsUrl);
export const fetchItems = () => axios.get(itemsUrl);


