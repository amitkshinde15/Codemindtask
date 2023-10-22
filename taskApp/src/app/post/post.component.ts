import { Component, OnInit } from '@angular/core';
import { PostServieService } from '../post-servie.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor(private postService: PostServieService) { }

  posts: any[] = [];
  postDescription: string;
  postedImage: string | ArrayBuffer;
  showPostedContent: boolean = false;
  commentText: string = '';

   
  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.map((post) => ({
        ...post,
        likesCount: 0,
        comments: [],
        isLiked: false,
      }));

    }); 
  }
  toggleLike(post) {
    post.isLiked = !post.isLiked;
    post.likesCount += post.isLiked ? 1 : -1;
    this.postService.updateLikes(post.id, post.likesCount).subscribe((response) => {

    });

  }


  addComment(post, comment) {
    if (comment) {
      post.comments.push(comment);
      this.commentText = ''; 
      this.postService.updateComments(post.id, post.comments).subscribe((response) => {
       
      });

    }
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.postedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onPost() {
    this.showPostedContent = true;
    
      
      if (this.postedImage && this.postDescription) {

        const postData = {
          description: this.postDescription,
          image: this.postedImage.toString(),
        };
  

        this.postService.addPost(postData).subscribe((response) => {
        
        });
      }
    
  }
}