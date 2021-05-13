import { getRequests } from "./dataAccess.js";

const convertRequestsToHTML = (request) => {
  return /*html*/ `
        <li>
            ${request.description}
        </li>`;
};

export const Requests = () => {
  const requests = getRequests();

  let html = `
    <ul>
    ${requests.map(convertRequestsToHTML).join("")}
    </ul>
    `;

  return html;
};
