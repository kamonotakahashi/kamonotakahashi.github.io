import Vue from 'vue';

class Store {

    private clientWindowWidth: number;
    private clientWindowHeight: number;

    public get getWindowWidth() :number {
        return this.clientWindowWidth;
    }

    public get getWindowHeight() :number {
        return this.clientWindowHeight;
    }

    public setWindow(window: any) {
        if(window) {
            this.clientWindowWidth = window.innerWidth || 0;
            this.clientWindowHeight = window.innerHeight || 0;
        }
    }
}

export default Vue.observable(new Store());