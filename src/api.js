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
  // alert a generic message for the user
  alert("Sorry! Something went wrong. Try again later.");
  // cause the error again so the .then() won't be called
  throw err;
}

export function getPollList() {
  return backendApi.get("/api/polls").catch(errorHandler);
}

export function getPollDetails(pollId) {
  return backendApi.get(`/api/polls/${pollId}`).catch(errorHandler);
}

export function postPoll(pollSubmission) {
  return backendApi.post("/api/polls", pollSubmission).catch(errorHandler);
}

export function getArgumentList() {
  return backendApi.get("/api/arguments").catch(errorHandler);
}

export function getArgumentDetails(argumentId) {
  return backendApi.get(`/api/arguments/${argumentId}`).catch(errorHandler);
}

export function postArgument(argumentSubmission) {
  return backendApi
    .post("/api/arguments", argumentSubmission)
    .catch(errorHandler);
}

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
  return backendApi.post("/api/logout").catch(errorHandler);
}
