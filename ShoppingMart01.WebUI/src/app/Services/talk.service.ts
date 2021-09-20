import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TalkService {
 
  private socket: Socket; 
  private url = 'http://localhost:5000'; 

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  joinRoom(data): void {
    this.socket.emit('join', data);
  }

  public sendMessage(message) {
    this.socket.emit('message', message);
}

  getMessage(): Observable<any> {
    return new Observable<{user: string, message: string}>(observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

  getStorage() {
    const storage: string = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data) {
    localStorage.setItem('chats', JSON.stringify(data));
  }

}
