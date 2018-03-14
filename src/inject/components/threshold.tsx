import "./threshold.css";
import * as React from "react";
import {observer} from "mobx-react";
import {SlidebarStore} from "../stores/slidebar";
import ThresholdStore from "../stores/threshold";
import {SidebarStates} from "./sidebar";

@observer
export default class Threshold extends React.Component<{
    store: SlidebarStore
}, {}> {

    private mouseOver: boolean = false;

    componentDidMount(){
        chrome.storage.sync.get(items => {
            Object.keys(items).forEach(value => {
                switch (value){
                    case "threshold":{
                        console.log()
                        ThresholdStore.width = items[value];
                        break;
                    }
                }
            });
        })
    }

    private async handleOnMouseEnter(){
        this.props.store.loadState(SidebarStates.Login);

        this.mouseOver = true;
        await this.sleep(50);
        if(this.mouseOver)
            this.props.store.visible = true;
    }

    private sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        return(
            <div style={{width: ThresholdStore.width + "px"}} id={"injected-threshold"} onMouseEnter={(event) => this.handleOnMouseEnter()} onMouseLeave={() => this.mouseOver = false}>

            </div>
        );
    }
}