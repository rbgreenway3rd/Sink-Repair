import { fetchRequests } from "./dataAccess.js";
import { SinkRepair } from "./SinkRepair.js";

const mainContainer = document.querySelector("#container");

const render = () => {
  fetchRequests()
    // .then(fetchPlumbers)
    // .then(fetchCompletions)
    .then(() => {
      mainContainer.innerHTML = SinkRepair();
    });
};

render();

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});

// document.addEventListener("stateChanged", (event) => {
//   console.log("State of data has changed. Regenerating HTML...");
//   render();
// });
