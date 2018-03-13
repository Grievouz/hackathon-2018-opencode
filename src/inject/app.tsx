import "./app.css";
import * as React from "react";
import Sidebar from "./components/sidebar"
import SidebarStore from "./stores/sidebar";
import Threshold from "./components/threshold";
import {observer} from "mobx-react";
import {render} from "react-dom";

@observer
export default class App extends React.Component<{}, {}> {

    render() {
        return(
            <div id={"injected-app"}>
                <Threshold store={SidebarStore}/>
                <Sidebar store={SidebarStore}/>
            </div>
        );
    }
}

let inDiv: HTMLElement = document.createElement("div");
inDiv.id = "injected-div";
document.body.appendChild(inDiv);

let font = document.createElement('link');
font.href = "https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700";
font.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(font);

render(<App/>, document.getElementById("injected-div"));