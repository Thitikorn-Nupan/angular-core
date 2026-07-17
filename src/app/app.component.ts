// All imports you can access on html file
// Ex, <h3 class="mt-2 mb-2">{{ brackets.curlyBracketR }}</h3>
// but you have to put in on attribute in class
import {Component} from '@angular/core';
import {brackets} from "./objects/brackets";
import {Phone} from "./entities/phone";
import {FunctionsService} from "./services/functions.service";

@Component({
  selector: 'app-root', //* set name for getting component
  templateUrl: './app.component.html', //* set template html file
  styleUrls: ['./app.component.css'] //* set style css file
})
export class AppComponent extends Phone { // *** Now all methods/attributes on Phone can access on app.component.html

  protected readonly JSON = JSON;
  private readonly title: string = 'AppComponent class';
  protected readonly brackets = brackets;

  // ** protect modifier can access on html
  protected readonly serviceFunctions = new FunctionsService(); // created object class

  public getTitle(): string {
    return this.title;
  }

}
