import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, push, onChildAdded, onValue, child, get } from 'firebase/database';
import { defer, from, Subject } from 'rxjs';
import { product } from '../Classes/product';

const firebaseConfig = {
  apiKey: "AIzaSyBZK5GUmw1hSorv8w45T2AAYJVbmlzR6zs",
  authDomain: "chat-99i.firebaseapp.com",
  databaseURL: "https://chat-99i-default-rtdb.firebaseio.com",
  projectId: "chat-99i",
  storageBucket: "chat-99i.appspot.com",
  messagingSenderId: "51836681646",
  appId: "1:51836681646:web:ae6e7655322c3d0e3e9c3f"
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private fireEvent = new Subject<boolean>();

  event = this.fireEvent.asObservable();

  constructor () {
    const app = initializeApp(firebaseConfig);
  }

  items: product[] = [];

  async create(): Promise<any> {
    const db = getDatabase();
    const shoppingCart = ref(db, '/Shopping-cart');
    const cart = push(shoppingCart);
    set(await cart, {
      dateCreated: new Date().getTime()
    });
    return cart.key
  }

  async getCart() {
    return this.getFirebaseCart()
    // const observable$ = defer(() => from(this.getFirebaseCart()));
    // return observable$;
    // let cartData
    //  let cartId = await this.getOrCreateId();
    //  console.log(cartId)
    // const db = getDatabase();
    // const shoppingCartRef = ref(db, '/Shopping-cart/' + cartId);
    // onValue(shoppingCartRef, (snapshot) => {
    //   cartData = snapshot.val();
    //  console.log(cartData)
    // });
    // return cartData

  }

  private async getFirebaseCart(){
    let cartId = await this.getOrCreateId();
    console.log(cartId)
    return new Promise((resolve, reject) => {
      let cartData
      const db = getDatabase();
      const shoppingCartRef = ref(db, '/Shopping-cart/' + cartId);
      onValue(shoppingCartRef, (snapshot) => {
        snapshot.forEach(childSnap=>{
          childSnap.forEach(xx=>{
            console.log(xx.val())
            // resolve(childSnap.val())
          })
        
        })
        cartData = snapshot.val();
        resolve(snapshot.val())
      });
    });
  }

  async getOrCreateId(): Promise<string> {
    let cartId = localStorage.getItem('cartId')
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result);
    return result;
  }

  async addToCart(product: product) {
    // let cartId = await this.getOrCreateId();
    // const db = getDatabase();
    // let cartItems = ref(db, '/Shopping-cart/' + cartId + '/items/' + product.Model_number);
    // const Items$ = push(cartItems);
    // onValue(cartItems, (item) => {
    //   if (item.exists()) {
    //     set(ref(db, '/Shopping-cart/' + cartId + '/items/' + product.Model_number), {
    //       product: product,
    //       quantity: item.val().quantity + 1
    //     });
    //   }
    //   else {
    //     set(cartItems, {
    //       product: product,
    //       quantity: 1
    //     });
    //   }
    // },
    //   {
    //     onlyOnce: true
    //   });

    //   const updates = {};
    // updates['/posts/' + newPostKey] = postData;
    // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    //return update(ref(db), updates);

    this.items.push(product);
    localStorage.setItem('Cart', JSON.stringify(this.items))
  }

 async removeFromCart(product: product){
    let cartId = await this.getOrCreateId();
    const db = getDatabase();
    let cartItems = ref(db, '/Shopping-cart/' + cartId + '/items/' + product.Model_number);
    const Items$ = push(cartItems);
    onValue(cartItems, (item) => {
      if (item.exists()) {
        set(ref(db, '/Shopping-cart/' + cartId + '/items/' + product.Model_number), {
          product: product,
          quantity: item.val().quantity -1
        });
      }
    },
      {
        onlyOnce: true
      });
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  emitEvent(bool: boolean) {
    this.fireEvent.next(bool);
  }
}
