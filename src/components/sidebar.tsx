import "./sidebar.css";
import * as React from "react";
import {observer} from "mobx-react";
import {SidebarStoreType} from "../stores/sidebar";
import ContentCard from "./contentCard";
import {AppStoreType} from "../stores/app";

@observer
export default class Sidebar extends React.Component<{
    store: SidebarStoreType
}, {
    cards: JSX.Element[]
}> {

    constructor(props){
        super(props)
        this.props = props;

        this.state = {
            cards: [
                <ContentCard/>,
                <ContentCard/>
            ]
        }

        window.addEventListener("click", (event) => {
            if (!document.getElementById("injected-sidebar").contains(event.target as Node)) {
                this.props.store.visible = false;
            }
        });
    }

    render() {
        return(
            <div id={"injected-sidebar"} className={this.props.store.visible ? "opened" : "closed"}>
                {this.state.cards}
            </div>
        );
    }
}