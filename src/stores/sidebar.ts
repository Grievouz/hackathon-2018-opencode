import {observable} from "mobx";

class SidebarStore{
    @observable visible: boolean = false;
}

var store = new SidebarStore();

export default store

export type SidebarStoreType = {
    visible: boolean
}