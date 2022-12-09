import axios from "axios";
// const API_BASE = process.env.REACT_APP_API_URL;
const API_BASE = 'http://localhost:4000'
console.log("API_BASE ", API_BASE);

// const api = axios.create({ withCredentials: true });

export const loginUser = async (user) => {

  const response = await axios.post(`${API_BASE}/api/login`, user);
  console.log("response", response);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await axios.post(`${API_BASE}/api/register`, user);
  console.log("response", response);
  return response.data;
};

export const forgotPasword = async (email) => {
  const response = await axios.post(`${API_BASE}/api/forget-password`, email)
  console.log("response", response);
  return response
};

export const updatePassword = async ({ password, id, token }) => {
  const response = await axios.post(`${API_BASE}/api/update-password/${id}/${token}`, { password: password })
  console.log("response", response);
  return response
};

export const userData = async ( token ) => {
    const response = await axios.post(`${API_BASE}/api/userData`, { token: token })
    return response.data
};

export const logoutUser = async () => {
    const response = await axios.post(`${API_BASE}/api/logout`)
    console.log("response in logout", response)
    return response.data;
};

export const updateUser = async (user) => {
    const {currentUser, profileData} = user
    const response = await axios.put(`${API_BASE}/api/update/${currentUser._id}`, profileData);
    console.log("response", response);
    return response;
};

export const profile = async () => {
    const response = await axios.post(`${API_BASE}/api/profile`)
    console.log("client profile", response)
    return response.data
}