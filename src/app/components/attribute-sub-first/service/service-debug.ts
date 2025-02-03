import {Injectable} from "@angular/core";
@Injectable(
  //{
  /*
  ProvidedIn is data available in @Injectable has to be used to specify the module in which the service can be used.
  root is a special option which refers the root module of the application.
  */
  // providedIn: 'root'
  //}
)
/*
     @Injectable decorator is attached to ServiceDebug class,
     which enables the ServiceDebug to be used in Angular component of the application.
*/
/*
   Basically... !
   My service if we set auto write some component
   Like
   private service : Service
   constructor(service: ServiceDebug) {
    this.service = service
   }
   Then
   ServiceDebug can access
   that component
*/
class ServiceDebug {
  constructor() {
    console.log('ServiceDebug constructor\'s is working')
  }

  get testServiceDebug() : string {
    return 'I am inside ServiceDebug class'
  }
  info(message : String) : void {
    console.log(message);
  }
}

export {
  ServiceDebug
}
