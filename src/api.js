// The code hereafter is copied from the ironphone-client example
// with extra comments. The section that is currently specific to the
// ironphone example app is commented out so as to serve as guidance for
// the current app (poll-n)
// #####################################################################

// #####################################################
// This first section will probably remain useful anyway
// -----------------------------------------------------
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

// #####################################################################
// This second section's names and functions are specific to ironphones.
// We will however probably need similar functions for our app
// ---------------------------------------------------------------------

export function getPollList() {
  return backendApi.get("/api/polls").catch(errorHandler);
}

// export function getPhoneDetails(phoneId) {
//   return backendApi.get(`/api/phones/${phoneId}`).catch(errorHandler);
// }

// export function postPhone(phoneSubmission) {
//   return backendApi.post("/api/phones", phoneSubmission).catch(errorHandler);
// }

// export function postSignUp(userSubmission) {
//   return backendApi
//     .post("/api/process-signup", userSubmission)
//     .catch(errorHandler);
// }

// export function postLogIn(loginCredentials) {
//   return backendApi
//     .post("/api/process-login", loginCredentials)
//     .catch(errorHandler);
// }

// export function getLogOut() {
//   return backendApi.post("/api/logout").catch(errorHandler);
// }
