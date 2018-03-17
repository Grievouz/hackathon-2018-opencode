import "./app.css";
import "./europa.css"
import * as React from "react";
import Sidebar from "./components/sidebar"
import Threshold from "./components/threshold";
import {render} from "react-dom";
import {isPlainObject} from "mobx/lib/utils/utils";

class App extends React.Component<{}, {}> {

    render() {
        return (
            <div id={"injected-app"}>
                <Threshold/>
                <Sidebar/>
            </div>
        );
    }
}

let base: HTMLDivElement = document.createElement("div");
base.id = "injected-react-base";
document.body.appendChild(base);

render(<App/>, document.getElementById("injected-react-base"));
