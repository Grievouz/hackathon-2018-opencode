import * as React from 'react';
import {render} from 'react-dom';
import App from "./app";

let inDiv: HTMLElement = document.createElement("div");
inDiv.id = "injected-div";
document.body.appendChild(inDiv);

let font = document.createElement('link');
font.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700";
font.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(font);

render(<App/>, document.getElementById("injected-div"));