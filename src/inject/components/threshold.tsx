import "./threshold.css";
import * as React from "react";
import {observer} from "mobx-react";
import {SidebarStoreType} from "../stores/sidebar";

@observer
export default class Threshold extends React.Component<{
    store: SidebarStoreType
}, {}> {

    private mouseOver: boolean = false;

    private async handleOnMouseEnter(){
        this.mouseOver = true;
        await this.sleep(40);
        if(this.mouseOver)
            this.props.store.visible = true;
    }

    private sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        return(
            <div id={"injected-threshold"} onMouseEnter={(event) => this.handleOnMouseEnter()} onMouseLeave={() => this.mouseOver = false}>

            </div>
        );
    }
}