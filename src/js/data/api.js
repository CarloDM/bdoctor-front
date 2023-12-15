import { store } from './store';
import { reactive } from 'vue';
import axios from "axios";
export const api = reactive({
    methods: {
        getTypologies() {
            axios.get(store.typologiesApi)
                .then((response) => {
                    store.services = response.data.data;
                })
        },
        getDoctors(){
            axios.get(store.doctorsApi)
            .then((response) => {
                // console.log(response.data.data);
                store.users = response.data.data;
            })
        }

    },

})
