import "./contentCard.css";
import * as React from "react";
import {CSSProperties} from "react";
import {AppStoreType} from "../stores/app";
import {observer} from "mobx-react";

@observer
export default class ContentCard extends React.Component<{}, {}> {



    render() {
        return(
            <div className={"contentCardContainer"}>
                <div className={"contentCard"}>
                    <div className={"header"}>
                        <div className={"headerIconContainer"}>
                            <img className={"headerIcon"} src="https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico"/>
                        </div>
                        <div className={"headerHeadline"}>
                            Stackoverflow
                        </div>
                        <div className={"headerExtra"}>
                            30min
                        </div>
                    </div>
                    <span className={"body"}></span>

                </div>
            </div>
        );
    }
}