import "./app.css";
import "./fonts/europa.css"
import * as React from "react";
import Sidebar from "./components/sidebar"
import Threshold from "./components/threshold";
import {render} from "react-dom";

class App extends React.Component<{}, {}> {

    render() {
        return (
            <div id={"app-base"}>
                <Threshold/>
                <Sidebar/>
            </div>
        );
    }
}

render(<App/>, base);