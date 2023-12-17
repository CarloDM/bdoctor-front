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

                store.users = response.data.data;
                store.usersIsload = true;
            })
        },

        navigateResults(url){

            axios.get(url)
            .then((response)=>{

                store.users = response.data.data;

            })
            .catch((error) =>{
                console.log(error)
            })
        },

    },

})
