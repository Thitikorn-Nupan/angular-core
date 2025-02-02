import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs'; // for using observable

@Component({
  selector: 'app-understand-observable',
  templateUrl: './understand-observable.component.html',
  styleUrls: ['./understand-observable.component.css']
})
export class UnderstandObservableComponent implements OnInit {
  /*There are 4 stages for a life cycle of an observable.
    Creation
    Subscription
    Execution
    Destruction
  */

   // basic Observable type (it has many sub types of it )
    protected data : Observable<any>

    protected message = ""

  ngOnInit(): void {

      let observable = Observable.create((observe : any)=> {
        observe.next('Hello World') // public value
        // If an error or completion occurred it will automatically stop the execution.
        // You can only use Hello World
        // observe.error('Error occured.')
        // observe.complete('Data stream is over.')
        observe.next('Hello Mather Fucker')

        setTimeout(() => {
          observe.next('Hello World After Delay 2s.')
        },2000)

        setTimeout(() => {
          // the first set timeout won work
          observe.error('Error occured.')
        },1000)

      })

      // This is how you can create an observable. But observables are useless until you subscribe to them.

      observable.subscribe((message : any) => {
        this.message = message // message will be Hello World
        console.log(message)
      });

      // ** Observables are lazy. It means that if it is not subscribed then it will not emit data. And also, handling asynchronous data emitting that has multiple data values is easier with observables.
    }

    constructor() {
      this.data = new Observable(observer => {
        observer.next('Hello World Form Data')
      })

      this.data.subscribe((message : any) => {
        console.log(message)
      })
    }
}
