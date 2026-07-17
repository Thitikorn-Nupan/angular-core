import {Component, OnInit} from '@angular/core';
import {brackets} from "../../objects/brackets";
import {FunctionsService} from "../../services/functions.service";
import {ServiceDebug} from "./service/service-debug"; // ServiceDebug is normal class but has @Injector
import {ServiceHttp} from "./service/service-http"; // same
// import {ForServiceHttpService} from "../for-service-http.service";
import {Comment} from "../../interface/comment";
import {Post} from "../../interface/post";
import {User} from "../../entities/user";
@Component({
  selector: 'app-attribute-sub-first',
  templateUrl: './attribute-sub-first.component.html',
  styleUrls: ['./attribute-sub-first.component.css'] ,
  /*
    Here, ServiceDebug will be available only inside the AttributeSubFirstComponent and its view.
    ** To make ServiceDebug in other component, simply use providers decorator in necessary component.
    ** viewProviders is similar to provider except it does not allow the service to be used inside the component content created using ng-content directive.
  */
  providers : [
    ServiceDebug,
    ServiceHttp
  ]
  // *** Ts files can work in this case. the once is ServiceDebug class and second ForServiceDebugComponent class , ServiceHttp class
  // viewProviders : [ServiceDebug]
})

export class AttributeSubFirstComponent extends FunctionsService implements OnInit {

  protected readonly brackets = brackets;
  private _currentDate = new Date()
  private _title : string = 'AttributeSubFirstComponent class';

  // it means Array type Entity
  private _comments :Comment[] | any
  private _users : User[] | any
  private _post : Post | any

  private serviceHttp : ServiceHttp // have to for dependency injection

  // the concept it's like @Autowrite in spring boot
  constructor(serviceHttp : ServiceHttp) {
    super();
    this.serviceHttp = serviceHttp
  }


  ngOnInit() {
    this.loadComment()
  }

  loadComment () {
     this.serviceHttp.getTodos().subscribe((data : Object) => {
       this._comments = data
       this._users = data
     })
  }

  getPostId (value: any) {
      this.serviceHttp.getTodo(value).subscribe((data :Object) => {
        this._post = data
      })
  }


  public getTitle() : string {
    return this._title;
  }

  public setTitle(title : string)  {
    return this._title = title;
  }
  get currentDate(): Date {
    return this._currentDate;
  }


  get comments() : Comment[] {
    // console.log(this._comments[0])
    return this._comments;
  }
  get users():User[] {
    // console.log(this._users[0])
    return this._users;
  }

  get post(): Post {
    return this._post;
  }

}
