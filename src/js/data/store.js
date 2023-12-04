import {reactive} from 'vue';
export const store = reactive ({
  ciao:'ciao',


  services:[
    "Allergologia", "Cardiologia", "Chirurgia", "Dermatologia", 
    "Endocrinologia", "Fisiatria", "Fisioterapia", "Gastroenterologia", 
    "Geriatria", "Ginecologia", "Logopedista", "Medicina del lavoro", 
    "Neurochirurgia", "Oncologia", "Odontoiatria", "Ortopedia", 
    "Osteopatia", "Otorinolaringoiatria", "Pediatria", "Pneumologia", 
    "Psichiatria", "Psicologia", "Urologia" 
  ],

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