import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=vlipunov';

// the function will send FETCH_POSTS type to the reducers with payload being a GET request to get the list of posts
// redux-promise middleware will automatically resolve promise
export const fetchPosts = () => ({ type: FETCH_POSTS, payload: axios.get(`${ROOT_URL}/posts${API_KEY}`) });

// the function will send CREATE_POST type to the reducers with payload being a POST request to create a new post
// redux-promise middleware will automatically resolve promise
// values are the contents of the new post
// cb is the callback needed for navigating to the home page after the new post has been created
export const createPost = (values, cb) => ({ type: CREATE_POST, payload: axios.post(`${ROOT_URL}/posts/${API_KEY}`, values).then(() => cb()) });

// the fetchPost function will send FETCH_POST type to the reducers with payload being a GET request to get a single post by id
// redux-promise middleware will automatically resolve promise
// id argument is the id of the post that we are trying to fetch
export const fetchPost = id => ({ type: FETCH_POST, payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`) });

// the function deletePost will send FETCH_POST type to the reducers with payload being only an id of the deleted post
// redux-promise middleware will automatically resolve promise
// id argument is the id of the post that we are trying to delete
// cb is the callback needed for navigating to the home page after the post has been deleted
export const deletePost = (id, cb) =>{
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => cb());
    return { type: DELETE_POST, payload: id };
};
