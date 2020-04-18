import { Vue, Component } from "vue-property-decorator";
import { Client } from '@/types/client';

/* Firebase */
import firebase from 'firebase/app';
import {firebaseConfig} from '@/config/firebase';
import 'firebase/database';

/* Firebase 初期化 */
firebase.initializeApp(firebaseConfig);

type State = {
    client : Client,
    portfolio : ProfilePortfolio
}

type Image = {
    url: string,
    width: number,
    height: number
}

type ProfilePortfolio = {
    id?: number,
    siteName?: string,
    path?: string,
    image?: Image,
    createdDate?: Date,
    publish?: Boolean,
    goodCount?: number,
    badCount?: number
}

const state = Vue.observable<State>({
    client : {
        window_width: 0,
        window_height: 0,
        scroll_top: 0,
    },
    portfolio: {}
});

const firebaseDB = firebase.database();

@Component
export default class StoreMixin extends Vue {

    /* ウィンドウ */
    protected get _client() {
        return state.client;
    }
    protected setWindow() {
        state.client.window_width = $(window).width() || 0;
        state.client.window_height = $(window).height() || 0;
        state.client.scroll_top = $(window).scrollTop() || 0;
    }

    /* Firebase */
    protected get _firebase() {
        return state.portfolio;
    }
    protected setFirebase(objectPathName: string) :any {
        try {
            firebaseDB.ref(objectPathName).once("value").then( (res:any) => {
                if(res.val()) {
                    res.val().forEach( (item:ProfilePortfolio) => {
                        console.log(item);
                    });
                }
                console.log(state.portfolio);
            });
        } catch (err) {
            throw err;
        }
    }


}