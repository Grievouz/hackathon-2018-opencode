import "./sidebar.css";
import * as React from "react";
import {observer} from "mobx-react";
import {SidebarStore} from "../stores/sidebar";

@observer
export default class Sidebar extends React.Component<{
    store: SidebarStore
}, {}> {

    constructor(props){
        super(props)
        this.props = props;

        window.addEventListener("click", (event) => {
            if (!document.getElementById("injected-sidebar").contains(event.target as Node)) {
                this.props.store.visible = false;
            }
        });
    }

    render() {
        return(
            <div id={"injected-sidebar"} className={this.props.store.visible ? "opened" : "closed"}>
                {this.props.store.state}
            </div>
        );
    }
}