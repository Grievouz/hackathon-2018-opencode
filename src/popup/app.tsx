import "./app.css";
import * as React from "react";
import {render} from "react-dom";

export default class Popup extends React.Component<{}, {}> {

    render() {
        return(
            <div id={"popup-base"}>
                    <input id={"threshSlider"} type="range" min="20" max="100"  onMouseUp={() => {
                        console.log("sdf")
                        chrome.storage.sync.set({"threshold": document.getElementsByTagName("input")[0].value});
                    }}/>
            </div>
        );
    }
}



render(<Popup/>, document.getElementById("react-base"));