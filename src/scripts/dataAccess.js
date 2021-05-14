// Here are the four main methods used on HTTP requests:
// ----------------------------------------------------
// Method:	    Description:
//  GET	          Please give me this resource.
//  POST	        Please create something new.
//  PUT	          Please modify an existing resource.
//  DELETE	      Please delete an existing.
// ----------------------------------------------------

const applicationState = {
  requests: [],
};

const API = "http://localhost:8088";

export const fetchRequests = () => {
  return fetch(`${API}/requests`)
    .then((response) => response.json())
    .then((serviceRequests) => {
      // Store the external state in application state
      applicationState.requests = serviceRequests;
    });
};

export const getRequests = () => {
  return [...applicationState.requests];
};

export const sendRequest = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {});
};
