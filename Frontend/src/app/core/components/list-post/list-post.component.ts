import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListPostService } from '../../services/list-post/list-post.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.css'
})
export class ListPostComponent {
  title: string = '';
  description: string = '';
  rating: number = 0;
  hoverRatingValue: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(
    private postService: ListPostService,
    private router: Router
  ) {}

  setRating(rating: number) {
    this.rating = rating;
  }

  hoverRating(rating: number) {
    this.hoverRatingValue = rating;
  }

  onSubmit(postForm: NgForm) {
    if (!postForm.valid) {
      return;
    }

    const postData = {
      title: this.title,
      description: this.description,
      rating: this.rating
    };

    this.postService.createPost(postData).subscribe({
      next: (response) => {
        Swal.fire('Success', 'Post created successfully!', 'success');
        postForm.reset();
        this.rating = 0;
        this.hoverRatingValue = 0;
        this.router.navigate(['/postLogin']);
      },
      error: (err) => {
        Swal.fire('Error', 'Failed to create post: ' + (err.error?.message || err.message || 'Unknown error'), 'error');
      }
    });
  }
}