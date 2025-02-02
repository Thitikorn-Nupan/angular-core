import { NgModule } from '@angular/core'; //** NgModule decorator is used to convert a plain Typescript / JavaScript class into Angular module.
import { BrowserModule } from '@angular/platform-browser';
/*
  before we use components we have to import Class component like below
*/
import { AppComponent } from './app.component';
import { AttributesFunctionsFirstComponent } from './components/attributes-funtions-first/attributes-functions-first.component';
import {FormsModule} from "@angular/forms";
import { AttributeSubFirstComponent } from './components/attribute-sub-first/attribute-sub-first.component';
import { ForServiceDebugComponent } from './components/for-service-debug/for-service-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { ForAccessFormComponent } from './components/for-access-form/for-access-form.component';
import { UnderstandObservableComponent } from './components/understand-observable/understand-observable.component';
import { MenuComponent } from './components/menu/menu.component';
// import { TestApiComponent } from './components/test-api/test-api.component'; // HttpClient service is available inside the HttpClientModule module, which is available inside the @angular/common/http package.

@NgModule({
  declarations: [ //* declarations option is used to include components into the AppModule.
    AppComponent,
    AttributesFunctionsFirstComponent,
    AttributeSubFirstComponent,
    ForServiceDebugComponent,
    ForAccessFormComponent,
    UnderstandObservableComponent,
    MenuComponent
    // TestApiComponent,
  ],
  imports: [ //* imports option is used to import other modules into the AppModule. (loads modules through imports option.)
    BrowserModule,
    FormsModule ,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  providers: [], //* providers option is used to include the services for the AppModule
  bootstrap: [AppComponent] //* bootstrap option is used to set the root component of the AppModule.
})
export class AppModule {
  private static titleAppModule = 'AppModule attribute static can access'
}
