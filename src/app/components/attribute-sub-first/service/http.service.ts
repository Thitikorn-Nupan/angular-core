import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Comment} from "../../../interface/comment";
import {catchError, throwError} from "rxjs";
@Injectable({
  providedIn: 'root'
})
class ServiceHttp {

  private readonly url : any[] =
    [
      'https://jsonplaceholder.typicode.com/todos' , // passed interface
      'https://jsonplaceholder.typicode.com/users' ,// passed class
      'https://jsonplaceholder.typicode.com/posts' // has param
    ];

  private httpClient : HttpClient
  constructor(httpClient : HttpClient) { // we will inject it
    console.log('ServiceHttp constructor\'s is working')
    this.httpClient = httpClient;
  }
  public getTodos () {
    /*    this.httpClient.get(this.url[0]).pipe(catchError(this.httpErrorHandler)).subscribe( (data) => {
      console.log(data)
    } )*/
    return this.httpClient.get(this.url[0])
  }

  /*private httpErrorHandler (error: HttpErrorResponse) { // basic except handler
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
    }
    return throwError("Error occurred. Pleas try again");
  }*/
  public getTodo(n:number) {
    return this.httpClient.get(this.url[2]+'/'+n)
  }
}

export {
  ServiceHttp
}
