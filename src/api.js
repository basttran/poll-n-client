import axios from "axios";

// create an Axios object with pre-configured settings
const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  // send cookies to the backend on every request
  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err.response);
  }
  // cause the error again so the .then() won't be called
  throw err;
}

// POLL INFORMATION
export function getPollList() {
  return backendApi.get("/api/polls").catch(errorHandler);
}

export function getPollDetails(pollId) {
  return backendApi.get(`/api/polls/${pollId}`).catch(errorHandler);
}

export function getNextPoll(userId) {
  return backendApi.get(`/api/next-poll?userId=${userId}`).catch(errorHandler);
}

export function postPoll(pollSubmission) {
  return backendApi.post("/api/polls", pollSubmission).catch(errorHandler);
}

// AUTHENTIFICATION
export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogIn(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/api/logout").catch(errorHandler);
}
