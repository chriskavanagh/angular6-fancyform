import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { Post } from './../post'; // used in post request


@Component({
  selector: 'app-getrequest',
  templateUrl: './getrequest.component.html',
  styleUrls: ['./getrequest.component.css']
})
export class GetrequestComponent implements OnInit {  
  repos$;
  req$;
  path: string = 'https://jsonplaceholder.typicode.com/posts';
  temp: boolean = true;
  
  // ex Observable "of" with a delay of 5 seconds
  cities$: Observable<any[]> = of([
          {name: 'Los Angeles', population: '3.9 million', elevation: '233′'},
          {name: 'New York', population: '8,4 million', elevation: '33′'},
          {name: 'Chicago', population: '2.7 million', elevation: '594′'},
  ])
  .pipe(delay(5000));

  post: Post = {
        title: undefined,
        body: undefined,
        userId: undefined
  }
  constructor(private http: HttpClient) {}            
  
  ngOnInit() {
      // get request    
      this.repos$ = this.http.get<Post>(this.path) // async in template, no need to subscribe.
      // .subscribe(data => this.repos$ = data) or . . .
      // this.repos$.subscribe(data => this.repos$ = data);
      
      // post request
      /* const data: Post = {
        title: "I am the title",
        body: "I am the body.",
        userId: "1"
      } */

      /* this.req$ = this.http.post<Post>(this.path, this.post)
      .pipe(map(data => "I am " + data.title), delay(3000))     
      .subscribe(
        data => console.log(data),
         err => console.log("Error Occured!")
        ) */
    }

    newPost():void {
      this.req$ = this.http.post<Post>(this.path, this.post)
      console.log(this.post)
       
    };

}

