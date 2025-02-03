import { Component } from '@angular/core';
import {brackets} from "../../objects/brackets";
import {Student} from "../../entities/student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-attributes-functions-first',
  templateUrl: './attributes-functions-first.component.html',
  styleUrls: ['./attributes-functions-first.component.css']
})
class AttributesFunctionsFirstComponent {

  private readonly title : string = 'AttributesFunctionsFirstComponent class';

  protected readonly brackets = brackets;
  private students : Student[] = []
  private student : Student | undefined

  public getTitle() : string {
    return this.title;
  }

  public create(formStudent : NgForm) {
    // console.log(formStudent) // [object Object]
    const value = formStudent.value;
    let nickname : string = value.nickname.trim()
    let age : number = value.age
    let year : number = value.year

    if ((nickname.length === 0) || (age === null) || (year === null)) {
      alert('Invalid values');
    }
    else if ((nickname.length !== 0) && (age !== null) && (year !== null)) {
      this.student = new Student(value.nickname,value.age,value.year)
      // this.students.push(this.student) //*** push() add value on the bottom
      this.students.unshift(this.student) //*** unshift() add value on the top
    }
  }

  public reads () : Student[] {
    return this.students
  }

  public delete() {
    this.students.pop() // remove on the button
  }
}

export {
  AttributesFunctionsFirstComponent
}
