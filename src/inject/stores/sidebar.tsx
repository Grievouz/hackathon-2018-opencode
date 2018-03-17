import {computed, observable} from "mobx";
import ThresholdStore from "./threshold";

export class SidebarStore{
    @observable  visible: boolean = false;
    @observable state: JSX.Element[] = [];
}

var store = new SidebarStore();

export default store