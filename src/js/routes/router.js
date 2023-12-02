import {createRouter, createWebHistory } from 'vue-router';
import palettePage from '../components/colorpaletteexample.vue';
import home from '../components/pages/homePage.vue';
import search from '../components/pages/searchPage.vue';
import doctor from '../components/pages/doctorPage.vue';


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor,
    },
    {
      path: '/colorTest',
      name: 'colorTest',
      component: palettePage,
    },
  ]
})

export {router};