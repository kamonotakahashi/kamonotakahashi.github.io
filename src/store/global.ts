import { Vue, Component } from "vue-property-decorator";
import { Client } from '@/types/client';

type State = {
    client : Client,
}

const state = Vue.observable<State>({
    client : {
        window_width: 0,
        window_height: 0,
        scroll_top: 0,
    }
});

@Component
export default class StoreMixin extends Vue {

    get _client() {
        return state.client;
    }

    setWindow() {
        state.client.window_width = $(window).width() || 0;
        state.client.window_height = $(window).height() || 0;
        state.client.scroll_top = $(window).scrollTop() || 0;
    }
}