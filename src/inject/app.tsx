import "./app.css";
import * as React from "react";
import Sidebar from "./components/sidebar"
import SidebarStore from "./stores/slidebar";
import Threshold from "./components/threshold";
import ThresholdStore from "./stores/threshold";
import {observer} from "mobx-react";
import {render} from "react-dom";

@observer
export default class App extends React.Component<{}, {}> {


    render() {

        chrome.storage.onChanged.addListener(function(changes, namespace) {
            Object.keys(changes).forEach(value => {
                switch (value){
                    case "threshold":{
                        ThresholdStore.width = changes[value].newValue;
                        break;
                    }
                }
            });
        });

        return (
            <div id={"injected-app"}>
                <Threshold store={SidebarStore} />
                <Sidebar store={SidebarStore}/>
            </div>
        );
    }
}

let inDiv: HTMLElement = document.createElement("div");
inDiv.id = "injected-react-base";
document.body.appendChild(inDiv);

render(<App/>, document.getElementById("injected-react-base"));
