import {observable} from "mobx";

class SidebarStore{
    @observable dragging: JSX.Element;
}

var store = new SidebarStore();

export default store

export type AppStoreType = {
    dragging: JSX.Element
}