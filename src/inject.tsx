import * as React from 'react';
import {render} from 'react-dom';
import App from "./app";

let elemDiv: HTMLElement = document.createElement("div");
elemDiv.id = "injected-div";
document.body.appendChild(elemDiv);

render(<App />, document.getElementById("injected-div"));