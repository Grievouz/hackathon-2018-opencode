import {SidebarStates} from "../components/sidebar"
import {observable, computed} from "mobx";
import * as React from "react";

export class SlidebarStore{
    @observable visible: boolean = false;
    @observable state: JSX.Element[] = [];
    @observable loadState(state: SidebarStates){
        switch (state){
            case SidebarStates.Login:{
                this.state = [
                    <div key={"loginDiv"} id={"loginHeader"}>
                        <div id={"svgContainer"}>
                            <svg key={"svg"} viewBox="0 0 32 37">
                            <g key={"g1"} id="Canvas" transform="translate(777 -986)">
                                <g key={"g2"} id="Vector">
                                    <use key={"use1"} xlinkHref="#path0_fill" transform="translate(-779 985)" fill="#FFFFFF"/>
                                    <use key={"use2"} xlinkHref="#path1_fill" transform="translate(-779 985)" fill="#FFFFFF"/>
                                </g>
                            </g>
                            <defs key={"loginDiv"}>
                                <path key={"path1"} id="path0_fill" d="M 3.76752 11.5576C 2.09619 10.5962 2.09619 8.18474 3.76752 7.2234L 12.5791 2.15499C 14.2457 1.19632 16.3256 2.39936 16.3256 4.32207L 16.3256 14.4589C 16.3256 16.3816 14.2457 17.5846 12.5791 16.626L 3.76752 11.5576Z"/>
                                <path key={"path2"} id="path1_fill" d="M 32.2325 23.3492C 33.9038 24.3105 33.9038 26.722 32.2325 27.6833L 16.3046 36.845C 14.638 37.8037 12.5581 36.6006 12.5581 34.6779L 12.5581 16.3545C 12.5581 14.4318 14.638 13.2288 16.3046 14.1875L 32.2325 23.3492Z"/>
                            </defs>
                        </svg>
                        </div>
                        <div id={"head"} key={"head"}>Barbra</div>
                    </div>,
                    <div key={"loginButtons"} id={"loginButtons"}>
                        <button key={"btnG"}>G sign in</button>
                        <button id={"btnf"}>f sign in</button>
                    </div>

                ];
                break;
            }
        }
    }
}

var store = new SlidebarStore();

export default store