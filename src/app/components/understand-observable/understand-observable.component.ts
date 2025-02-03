import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'; // for using observable
import { Student } from 'src/app/entities/student';
import { brackets } from 'src/app/objects/brackets';

@Component({
  selector: 'app-understand-observable',
  templateUrl: './understand-observable.component.html',
  styleUrls: ['./understand-observable.component.css']
})
export class UnderstandObservableComponent implements OnInit {


  private readonly title : string = 'UnderstandObservableComponent class';
  protected readonly brackets = brackets;
  protected message = ""
  protected students : Student[] = []
  /*
    There are 4 stages for a life cycle of an observable.
    Creation
    Subscription
    Execution
    Destruction
  */
  // basic Observable type (it has many sub types of it )
  protected data : Observable<any>
  protected dataStudents : Observable<Student[]>

  constructor() {
    this.data = new Observable(observer => {
      observer.next('Data First') // // public value ** add data using .next(<data>)
    })

    this.dataStudents = new Observable(observer => {
      this.students[0] = new Student('Alex',25,4)
      this.students[1] = new Student('Alun',23,4)
      this.students[2] = new Student('Adum',22,4)
      observer.next(this.students) // public value
    })

    // when you need to use data from observe you have to subscribe
    this.data.subscribe((message: any) => {
      console.log(message)
    })

    this.dataStudents.subscribe((data: Student[]) => {
      console.log(data)
      /*[
          {
              "nickname": "Alex",
              "age": 25,
              "year": 4
          },
          {
              "nickname": "Alun",
              "age": 23,
              "year": 4
          },
          {
              "nickname": "Adum",
              "age": 22,
              "year": 4
          }
      ]*/
    })
  }

  ngOnInit(): void {
    // ** Test observable variable another way to create observe
    const observable = Observable.create((observe: any) => {
      observe.next('Hello World') // public value
      // If an error or completion occurred it will automatically stop the execution.
      // You can only use Hello World
      // observe.error('Error occured.')
      // observe.complete('Data stream is over.')
      observe.next('Hello Mather Fucker')

      setTimeout(() => {
        // ** no work because do error first
        observe.next('Hello World After Delay 2s.')
      }, 2000)

      setTimeout(() => {
        // the first set timeout won work
        observe.error('Error occured.')
      }, 1000)

    })

    // ** observables are useless until you subscribe to them.
    observable.subscribe((message: any) => {
      this.message = message // message will be Hello World
      console.log(message==="Hello Mather Fucker")
    });

    // ** Observables are lazy. It means that if it is not subscribed then it will not emit data. And also, handling asynchronous data emitting that has multiple data values is easier with observables.
  }

  public getTitle() : string {
    return this.title;
  }

}
