import { Component, OnInit } from '@angular/core';
import { PostLoginPageService } from '../../services/post-login-page/post-login-page.service';
import Swal from 'sweetalert2';

interface Post {
  id: number;
  title: string;
  description: string;
  rating: number;
}

interface ItineraryItem {
  id?: number;
  category: string;
  details: any;
}


@Component({
  selector: 'app-post-login-page',
  templateUrl: './post-login-page.component.html',
  styleUrl: './post-login-page.component.css'
})
export class PostLoginPageComponent implements OnInit{
  posts: any[] = [];
  itineraries: any[] = [];

  categories: string[] = ['Flights', 'Accommodations', 'Activities', 'Transportation'];
  newCategory: string = '';
  itemDetails: any = {
    flightTime: '',
    date: '',
    airlineCompany: '',
    hotelName: '',
    checkInDate: '',
    checkOutDate: '',
    activityName: '',
    location: '',
    time: '',
    transportType: '',
    departureTime: '',
    arrivalTime: ''
  };

  constructor(private postLoginPageService: PostLoginPageService) { }

  ngOnInit(): void {
    this.loadPosts();
    this.loadItineraries();
  }

  loadPosts() {
    this.postLoginPageService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Failed to load posts', err)
    });
  }

  loadItineraries() {
    this.postLoginPageService.getItineraries().subscribe({
      next: (data) => {
        this.itineraries = data;
        console.log('Itineraries loaded:', this.itineraries);
      },
      error: (err) => console.error('Failed to load itineraries', err)
    });
  }

  addItem() {
    const newItem = {
      category: this.newCategory,
      detail1: '',
      detail2: '',
      detail3: ''
    };

    if (this.newCategory === 'Flights') {
      newItem.detail1 = this.itemDetails.flightTime;
      newItem.detail2 = this.itemDetails.date;
      newItem.detail3 = this.itemDetails.airlineCompany;
    } else if (this.newCategory === 'Accommodations') {
      newItem.detail1 = this.itemDetails.hotelName;
      newItem.detail2 = this.itemDetails.checkInDate;
      newItem.detail3 = this.itemDetails.checkOutDate;
    } else if (this.newCategory === 'Activities') {
      newItem.detail1 = this.itemDetails.activityName;
      newItem.detail2 = this.itemDetails.location;
      newItem.detail3 = this.itemDetails.time;
    } else if (this.newCategory === 'Transportation') {
      newItem.detail1 = this.itemDetails.transportType;
      newItem.detail2 = this.itemDetails.departureTime;
      newItem.detail3 = this.itemDetails.arrivalTime;
    }

    this.postLoginPageService.addItinerary(newItem).subscribe({
      next: () => {
        Swal.fire('Success', 'Itinerary added successfully!', 'success');
        this.loadItineraries(); // Reload itineraries after adding new item
        this.newCategory = '';
        this.itemDetails = {
          flightTime: '',
          date: '',
          airlineCompany: '',
          hotelName: '',
          checkInDate: '',
          checkOutDate: '',
          activityName: '',
          location: '',
          time: '',
          transportType: '',
          departureTime: '',
          arrivalTime: ''
        };
      },
      error: (err) => Swal.fire('Error', 'Failed to add itinerary: ' + (err.error?.message || err.message || "Unknown error"), 'error')
    });
  }

  removeItem(id: number) {
    this.postLoginPageService.deleteItinerary(id).subscribe({
      next: () => {
        Swal.fire('Success', 'Itinerary removed successfully!', 'success');
        this.loadItineraries(); // Reload itineraries after removing item
      },
      error: (err) => Swal.fire('Error', 'Failed to remove itinerary: ' + (err.error?.message || err.message || "Unknown error"), 'error')
    });
  }
}
