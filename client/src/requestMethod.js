import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJlNzQ3ZDEzMzc1MWNjNjMzM2FhYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODA3NDkzMywiZXhwIjoxNjU4MzM0MTMzfQ.wahXgct2NbGuJ_kUzMiNeiZy71sDHk60Gx3gICls7p4";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   ?.currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
