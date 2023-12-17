import { store } from './store';
import { reactive } from 'vue';
import axios from "axios";
export const api = reactive({
    methods: {

        getTypologies() {
            axios.get(store.typologiesApi)
                .then((response) => {
                    store.typologies = response.data.data;
                })
        },

        getDoctors(){
            store.usersIsload = false;
            axios.get(store.doctorsApi)
            .then((response) => {
                // console.log(response.data.data);
                store.users = response.data.data;
                store.usersIsload = true;
            })

        }

    },

})
