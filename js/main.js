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
         messagges:[
           {
           date: '10/01/2020 15:30:55',
           message: 'Hai portato a spasso il cane?',
           status: 'sent'
         },

         { date: '10/01/2020 15:50:00',
           message: 'Ricordati di dargli da mangiare',
           status: 'sent'

         },
         {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }


       ],

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
