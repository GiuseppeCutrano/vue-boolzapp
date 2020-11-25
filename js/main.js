var app = new Vue(
    {
        el: '#root',
        data: {
            contactFriend: 0,
            nuovoMsg: '',
            risposta: 'ok',
            inserisciNome: '',
            nameUser: 'Nome Utente',
            avatarUser: 'img/avatar_io.jpg',



            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
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
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao che fai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Sto uscendo',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Ma sta piovendo',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Bene grazie!',
                            status: 'received'
                        }
                    ]
                }
            ]
        },
        methods: {
            // clicco sull'amico per vedere la chat
            clickFriend(index) {
                this.contactFriend = index;
            },
            // devo inserire un nuovo messaggio + enter
            inserisciMsg(nuovoMsg) {
                this.contacts[this.contactFriend].messages.push({
                    date:'',
                    message: nuovoMsg,
                    status: 'sent'
                });
                if (nuovoMsg != '') {
                    this.nuovoMsg = '';
                    setTimeout(() => {
                        this.contacts[this.contactFriend].messages.push({
                            date:'',
                            message: this.risposta,
                            status: 'received'
                        });
                    }, 1000)
                }
            },
            ricercaNome(inserisciNome) {
                this.contacts.forEach((contact, i) => {
                    if (contact.name.toLowerCase().includes(this.inserisciNome)) {
                        contact.visible = true;
                        console.log(inserisciNome);
                    } else {
                        contact.visible = false;
                        console.log(inserisciNome);
                    }
                });
            },
        }
    }
);
