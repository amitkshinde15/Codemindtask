import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServieService {
  url = 'http://localhost:3000/postData'
  
  constructor(private http : HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  addPost(postData: any): Observable<any> {
    return this.http.post(this.url, postData);
  }
  updateLikes(postId: number, likesCount: number): Observable<any> {
    const updateUrl = `${this.url}/${postId}`;
    return this.http.patch(updateUrl, { likesCount });
  }


  updateComments(postId: number, comments: string[]): Observable<any> {
    const updateUrl = `${this.url}/${postId}`;
    return this.http.patch(updateUrl, { comments });
  }
  getLikeCount(postId: number): Observable<number> {
    const getUrl = `${this.url}/${postId}`;
    return this.http.get<number>(getUrl).pipe(map((data: any) => data.likesCount));
  }

  
  getComments(postId: number): Observable<string[]> {
    const getUrl = `${this.url}/${postId}`;
    return this.http.get<string[]>(getUrl).pipe(map((data: any) => data.comments));
  }
}
