import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TalkService } from 'src/app/Services/talk.service';
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZK5GUmw1hSorv8w45T2AAYJVbmlzR6zs",
  authDomain: "chat-99i.firebaseapp.com",
  databaseURL: "https://chat-99i-default-rtdb.firebaseio.com",
  projectId: "chat-99i",
  storageBucket: "chat-99i.appspot.com",
  messagingSenderId: "51836681646",
  appId: "1:51836681646:web:ae6e7655322c3d0e3e9c3f"
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @ViewChild('popup', { static: false }) popup: any;
  @ViewChild('myModal') myModal;
  newMessage: string;
  private modalRef;
  public showScreen1: boolean;
  public roomId: string;
  public messageText: string;
  public historyArray = [{ message: 'hiii' }];
  public messageArray: { user: string, message: string }[] = [];
  private storageArray = [];

  public showScreen = false;
  public phone: string;
  public currentUser;
  public selectedUser;
  public userdata: any;
  public userList = [
    {
      id: 1,
      name: 'Dilawar khan',
      phone: '3165373909',
      image: 'assets/khn.jpg',
      roomId: {
        2: 'room-1',
        3: 'room-2',
        4: 'room-3'
      }
    },
    {
      id: 2,
      name: 'Ali Javed',
      phone: '3131414414',
      image: 'assets/ali.jpeg',
      roomId: {
        1: 'room-1',
        3: 'room-4',
        4: 'room-5'
      }
    },
    {
      id: 3,
      name: 'Hamza',
      phone: '1234567890',
      image: 'assets/hamza.png',
      roomId: {
        1: 'room-2',
        2: 'room-4',
        4: 'room-6'
      }
    },
    {
      id: 4,
      name: 'Misbah',
      phone: '0900123456',
      image: 'assets/user-2.png',
      roomId: {
        1: 'room-3',
        2: 'room-5',
        3: 'room-6'
      }
    }
  ];
  user: ({ id: number; name: string; phone: string; image: string; roomId: { 2: string; 3: string; 4: string; 1?: undefined; }; } | { id: number; name: string; phone: string; image: string; roomId: { 1: string; 3: string; 4: string; 2?: undefined; }; } | { id: number; name: string; phone: string; image: string; roomId: { 1: string; 2: string; 4: string; 3?: undefined; }; } | { id: number; name: string; phone: string; image: string; roomId: { 1: string; 2: string; 3: string; 4?: undefined; }; })[];
  loginScreen: boolean;

  constructor (
    private modalService: NgbModal,
    private chatService: TalkService
  ) {
    const app = initializeApp(firebaseConfig);

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.historyArray.push(snapshot.val())
        console.log(this.historyArray);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    // this.chatService.getChatHistory()
    //   .subscribe((res) => {
    //     const x = res.map(xx => xx.text)
    //     const ls = x.map(d => d.message)
    //     this.historyArray.push(x);
    //   })
  }

  ngOnInit(): void {
    this.chatService
      .getMessage()
      .subscribe((message: { user: string, room: string, message: string }) => {
        console.log(message, 'mess')
        this.messageArray.push(message);

        const db = getDatabase();
        set(ref(db, 'users/'), {
          message: message.message,
        });
      })
    this.currentUser = localStorage.getItem('user')
    if (this.currentUser !== null) {
      this.currentUser = JSON.parse(this.currentUser)
      this.userdata = this.currentUser
      console.log('user', this.userdata)
    }

  }

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modalService.open(content, { backdrop: 'static', centered: true });
  }

  login(dismiss: any): void {

    this.currentUser = this.userdata[0].number.toString()
    // this.currentUser = this.userList.find(user => user.phone === this.phone.toString());
    this.user = this.userList

    if (this.currentUser) {
      this.showScreen = true;
      dismiss();
    }
  }

  backClick() {
    this.modalService.dismissAll()
  }

  selectUserHandler(phone: string): void {

    this.selectedUser = this.userList.find(user => user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.currentUser.id];
    this.messageArray = [];

    this.storageArray = this.chatService.getStorage();
    const storeIndex = this.storageArray
      .findIndex((storage) => storage.roomId === this.roomId);

    if (storeIndex > -1) {
      this.messageArray = this.storageArray[storeIndex].chats;
    }

    this.join(this.currentUser.name, this.roomId);
    this.showScreen1 = true;
    this.modalRef = this.modalService.open(this.myModal)
  }

  join(username: string, roomId: string): void {
    this.chatService.joinRoom({ user: username, room: roomId });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: this.currentUser.name,
      room: this.roomId,
      message: this.messageText
    });
    this.messageText = '';
  }
}