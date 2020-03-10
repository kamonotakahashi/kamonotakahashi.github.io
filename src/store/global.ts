import { Vue, Component } from "vue-property-decorator";
import { Client } from '@/types/client';

type State = {
    client : Client,
}

const state = Vue.observable<State>({
    client : {
        width: 0,
        height: 0
    }
});

@Component
export default class StoreMixin extends Vue {

    get clientWindow() {
        return state.client;
    }

    get clientWindowWidth() { return state.client.width };
    get clientWindowHeight() { return state.client.height };

    setWindow(window: any) {
        if(window) {
            state.client.width = window.innerWidth || 0;
            state.client.height = window.innerHeight || 0;
        }
    }
}