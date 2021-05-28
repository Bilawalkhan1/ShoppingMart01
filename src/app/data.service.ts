import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    return {
      products: [
        {
          proId: 1,
          blogImg: '/assets/bikes.jfif',
          Name: 'Electric Bicycle',
          Price: '$500',
          desp: 'An electric bicycle, also known as an e-bike, is a bicycle with an integrated electric motor.',
        },
        {
          proId: 2,
          blogImg: '/assets/car.jfif',
          Name: 'Stellantis',
          Price: '$10000',
          desp: 'Lucky Motors is Bringing the World’s fourth Largest Car Manufacturers and tothe Pakistan ..',
        },
        {
          proId: 3,
          blogImg: '/assets/furniture.jfif',
          Name: 'Furniture',
          Price: '$1000',
          desp: 'From lahore to Torento sialkot is the fourth Largest furniture Manufacturers and tothe Pakistan .',
        },
        {
          proId: 3,
          blogImg: '/assets/fur.jfif',
          Name: 'Breslet',
          Price: '$50',
          desp: '925 sterling silver ring trend creative heavy industry opening adjustable personality.',
        },
        {
          proId: 4,
          blogImg: '/assets/car.jfif',
          Name: 'Stellantis',
          Price: '$10000',
          desp: 'Lucky Motors is Bringing the World’s 4th Largest Car Manufacturer to Pakistan ..',
        },
        {
          proId: 5,
          blogImg: '/assets/furniture.jfif',
          Name: 'Sitting Sofas',
          Price: '$1000',
          desp: 'From lahore to Torento sialkot is the fourth Largest furniture Manufacturers over the Pakistan .',
        },
        {
          proId: 6,
          blogImg: '/assets/fur.jfif',
          Name: 'Stellantis',
          Price: '$50',
          desp: '925 sterling silver ring trend creative industry chain opening adjustable personality jewe .',
        },
        {
          proId: 7,
          blogImg: '/assets/bikes.jfif',
          Name: 'Electric Bicycle',
          Price: '$500',
          desp: 'An electric bicycle, also known as an e-bike or bicycle with integrated electric propulsion.',
        },
      ]
    };
  }
}
