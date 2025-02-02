import {Component, OnInit} from '@angular/core';
import {Robot} from "../../entities/robot";
@Component({
  selector: 'app-for-access-form',
  templateUrl: './for-access-form.component.html',
  styleUrls: ['./for-access-form.component.css']
})
export class ForAccessFormComponent implements OnInit {

  private robot : Robot | any = {
      rid : null,
      codeName : null ,
      price : null
  }

  private robot2 : Robot2


  protected robot3 : Robot2 = new Robot2()

  constructor() {
    this.robot2 = new Robot2(); // create object before use any method in there
  }

  ngOnInit() {
  }
  setAttributeRobot(rid:number , codeName:string ,price:number) {

    this.robot.rid = rid
    this.robot.codeName = codeName
    this.robot.price = price

    this.robot2.rid = rid
    this.robot2.codeName = codeName
    this.robot2.price = price
  }
  onClickSubmit(data : any) {
    this.setAttributeRobot(data.rid,data.codeName,data.price)

    console.log(this.robot) // just public {rid: 14, codeName: 'xr-14', price: 1000000}
    console.log(this.robot2) // private Robot2 {_rid: 14, _codeName: 'xr-14', _price: 1000000}

  }
}

class Robot2 {
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
