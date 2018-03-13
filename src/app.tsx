import "./app.css";
import * as React from "react";
import Sidebar from "./components/sidebar";
import SidebarStore from "./stores/sidebar";
import Threshold from "./components/threshold";
import {observer} from "mobx-react";

@observer
class App extends React.Component<{}, {}> {

    render() {
        return(
            <div id={"injected-app"}>
                <Threshold store={SidebarStore}/>
                <Sidebar store={SidebarStore}/>
            </div>
        );
    }
}

export default App;