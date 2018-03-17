import "./sidebar.css";
import * as React from "react";
import {observer} from "mobx-react";
import SidebarStore from "../stores/sidebar";

@observer
export default class Sidebar extends React.Component<{}, {}> {

    constructor(props){
        super(props)
        this.props = props;

        window.addEventListener("click", (event) => {
            if (!document.getElementById("injected-sidebar").contains(event.target as Node)) {
                SidebarStore.visible = false;
            }
        });
    }

    render() {
        return(
            <div id={"injected-sidebar"} className={SidebarStore.visible ? "opened" : "closed"}>
                {SidebarStore.state}
            </div>
        );
    }
}

export enum SidebarStates{
    Login
}