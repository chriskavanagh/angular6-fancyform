import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
// import { from } from 'rxjs';


@Component({
  selector: 'app-getrequest',
  templateUrl: './getrequest.component.html',
  styleUrls: ['./getrequest.component.css']
})
export class GetrequestComponent implements OnInit {

  repos: Observable<any[]>;
  path: string = 'https://jsonplaceholder.typicode.com/posts';
  
  
  cities$: Observable<any[]> = of([
              {name: 'Los Angeles', population: '3.9 million', elevation: '233′'},
              {name: 'New York', population: '8,4 million', elevation: '33′'},
              {name: 'Chicago', population: '2.7 million', elevation: '594′'},
  ])
  .pipe(delay(5000));


  constructor(private http: HttpClient) {}            
  
  ngOnInit() {
      // get request    
      this.repos = this.http.get<any[]>(this.path) // async in template, no need to subscribe.
      // .subscribe(data => this.repos = data)
      
      // post request
      const params = new HttpParams()
                  .set("title", "Foo Title")
                  .set("body", "I am body")
                  .set("userId","1");
      const req = this.http.post(this.path, {params})
      .subscribe(
        data => console.log(data),
         err => console.log("Error Occured!")
        )
    }

}