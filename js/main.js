const myApp = new Vue({
  el: "#root",
  data: {
    // Nostro account
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },
     // contatti
     contacts:[
       {
         name:'Michele',
         avatar:'_1',
         visible: true,
         messagges:[{
           // qui vanno i messaggi
         }]
       },
       {
         name:'Fabio',
         avatar:'_2',
         visible: true,
         messagges:[{
           // qui vanno i messaggi
         }]
       },
       {
         name:'Samuele',
         avatar:'_3',
         visible: true,
         messagges:[{
           // qui vanno i messaggi
         }]

       },
       {
         name:'Luisa',
         avatar:'_6',
         visible: true,
         messagges:[{
           // qui vanno i messaggi
         }]

       }
     ]

  },

})
