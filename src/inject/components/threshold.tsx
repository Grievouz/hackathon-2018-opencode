import "./threshold.css";
import * as React from "react";
import {observer} from "mobx-react";
import SidebarStore from "../stores/sidebar";

@observer
export default class Threshold extends React.Component<{}, {}> {

    private mouseOver: boolean = false;

    private async handleOnMouseEnter(){
        this.mouseOver = true;
        await this.sleep(70);
        if(this.mouseOver){
            SidebarStore.visible = true;
        }
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