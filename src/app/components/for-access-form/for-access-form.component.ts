import {Component, OnInit} from '@angular/core';
import {Robot} from "../../entities/robot";
import {brackets} from "../../objects/brackets";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-for-access-form',
  templateUrl: './for-access-form.component.html',
  styleUrls: ['./for-access-form.component.css']
})
export class ForAccessFormComponent{

  private robot2 : RobotModifierAsPrivate
  protected readonly brackets = brackets;
  private readonly _title : string = 'ForAccessFormComponent class';

  private robot : Robot | any = {
      rid : null,
      codeName : null ,
      price : null
  }
  protected robot3 : RobotModifierAsPrivate

  constructor() {
    this.robot2 = new RobotModifierAsPrivate(); // create object before use any method in there
    this.robot3  = new RobotModifierAsPrivate();
  }

  get title(): string {
    return this._title;
  }


  setAttributeRobot(rid:number , codeName:string ,price:number) {

    this.robot.rid = rid
    this.robot.codeName = codeName
    this.robot.price = price

    this.robot2.rid = rid
    this.robot2.codeName = codeName
    this.robot2.price = price

  }

  onClickSubmit(data:NgForm) {
    const value = data.value
    this.setAttributeRobot(value.rid,value.codeName,value.price)
    console.log(this.robot) // *** just public {rid: 14, codeName: 'xr-14', price: 1000000}
    console.log(this.robot2) // *** private Robot2 {_rid: 14, _codeName: 'xr-14', _price: 1000000}
  }

  onClickSubmitFormDriven() {

    console.log(this.robot3)
  }


}

// another classes can be on the same ts file
class RobotModifierAsPrivate {
  private _rid! : number
  private _codeName! : string
  private _price! : number

  get rid(): number {
    return this._rid;
  }

  set rid(value: number) {
    this._rid = value;
  }

  get codeName(): string {
    return this._codeName;
  }

  set codeName(value: string) {
    this._codeName = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

}
