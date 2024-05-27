const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020', 
                      hour:'15:30',
                      message: '?',
                      status: 'sent'
                  },
                  {
                      date:'10/01/2020', 
                      hour:'15:50',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date:'10/01/2020', 
                      hour:'16:15',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ], lastmessage:'',
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.jpg',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020',
                      hour: '16:30',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020',
                      hour:'16:30',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020',
                       hour:'16:35',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.jpg',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020',
                       hour:'10:10',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020', 
                      hour:'10:20',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020', 
                      hour:'16:15',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020', 
                      hour:'15:30',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020', 
                      hour:'15:50',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020', 
                      hour:'15:30',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020', 
                      hour:'15:50',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_6.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020',
                      hour:'15:30',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020',
                      hour:'15:50',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020',
                      hour:'15:51',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020',
                      hour:'15:30',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020',
                      hour:'15:50',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020',
                      hour:'15:30',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020',
                      hour:'15:50',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020',
                      hour:'15:51',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ],
        currentIndex:0,
        newsms:null,
        filtro:null,
        lastDate:null,
      }
    },
    methods:{
      lastMessage(idxx){
        // const messages=[];
        // for(let i=0; i<this.contacts.length;i++){
        //   let messageLength=this.contacts[i].messages.length;
        //   messages.push(this.contacts[i].messages[messageLength-1].message)
        // }
        // console.log(messages);
        // const obj={
        //         date: '10/01/2020 15:51:00',
        //         message: 'OK!!',
        //         status: 'received'
        // }
        // this.contacts[idxx].messages.push(obj);
        // let lastsmsarray='';
        // const messagesL=this.contacts[idxx].messages.length;
        // const lastsmsL=this.contacts[idxx].messages[messagesL-1].message.length;
        // const lastsms=this.contacts[idxx].messages[messagesL-1].message;
        // for(i=0;i<lastsmsL;i++)
        //   {
        //       lastsmsarray+=(lastsms[i]);
        //       if(i===25)
        //         break;
        //   }
        // this.contacts[idxx].lastmessage='aaaaaa'
        // this.contacts[idxx].lastmessage=lastsmsarray;
      },
      openChat(idx){
        this.currentIndex=idx;
      },
      addMessage(){
        const messageList=this.contacts[this.currentIndex].messages;
        const sms=this.newsms;
        let DateTime = luxon.DateTime;
        const now = DateTime.now();
        if(sms)
            {
                const obj={
                    date:now.date,
                    hour:now.hour + ':' + now.minute,
                    message:sms,
                    status:'sent'
                }
                const obj2={
                    date:now.date,
                    hour:now.hour + ':' + now.minute,
                    message:'ok',
                    status:'received'
                }
                messageList.push(obj);
                this.newsms='';
                setTimeout(()=> { messageList.push(obj2); },"1000");
            }
      },
      search(){
            const filter=this.filtro.toLowerCase();
            
            for(const element in this.contacts){
                if(!filter)
                    this.contacts[element].visible=true;
                for(let i=0;i<filter.length;i++){
                    if(this.contacts[element].name[i].toLowerCase()!==filter[i]){
                        this.contacts[element].visible=false;
                        break;
                        }
                        else{
                            this.contacts[element].visible=true;
                        }
                    
                    }
                }
            }
        }

    
  }).mount('#app')