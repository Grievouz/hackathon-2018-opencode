import {computed, observable} from "mobx";
import SidebarStore from  "./sidebar";

export class ThresholdStore{
    @observable width: string;
}

var store = new ThresholdStore();

export default store