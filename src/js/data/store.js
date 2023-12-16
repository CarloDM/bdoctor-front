import {reactive} from 'vue';
export const store = reactive ({
  ciao:'ciao',

  typologiesApi: 'http://127.0.0.1:8000/api/typologies/get',
  doctorsApi: 'http://127.0.0.1:8000/api/doctors/get',

  services:[],
  
  users:[],
  usersIsload: false,




  fakeDoctor: {
    name:'Dott.ssa Maria Di Mario',
    sex: 'female',
    services: ['Cardiologia','Chirurgia'],
    rating: 2,
    reviews: 4,
    address: 'Milano',
    photo: null,
    // photo: 'https://www.centromedicospaziobenessere.it/wp-content/uploads/2019/02/dottoressa-centro-medico-spazio-benessere.png',
  }


})