import {NgForm} from "@angular/forms";
class ServiceFunctions {
  public readonly MAX_NUMBER = new Array(12) // for use to be size of loop , it works
  // countries is arrays type object
  private readonly countries : {country:string,city:string[]} []  = [
    { // element 1
      // key    : values
      'country' : 'TH' ,
      'city' : ['Bangkok','Samut Prakan']
    } ,
    {
      'country' : 'US' ,
      'city' : ['New York','Chicago']
    }
  ]
  private oddOrEven : string | any
  private _textTesting : string = 'Maybe It\'s destiny'
  private _numberTesting : number | string = 10.10
  private _table : number | any =  0
  private _open : boolean = false
  // ** you can specify type as any public getCountries() : any
  public getCountries() : {country:string,city:string[]} [] {
     return this.countries
  }

  public getOddOrEven() : any {
    return this.oddOrEven
  }

  public setOddOrEven(n: number | any) : void {
    // console.log(n.length ) // if didn't put a value type number will return 0
    // console.log(n % 2 === 0 ) // true
    if (n.length === 0 ) {
      this.oddOrEven = null
    }
    else if (n % 2 === 0) {
      this.oddOrEven = n + ' is even number'
    }
    else if (n % 2 !== 0) {
      this.oddOrEven =  n + ' is odd number'
    }
  }

  public checkEvent(event : any | undefined) {
    // event type true and false
    // when undefined will be false
    console.log("button was clicked")
    if(event) console.log(event.target); // <button _ngcontent-ng-c1233715784="" class="btn btn-dark p-1 mt-1">send 2</button>
  }


  get textTesting(): string {
    return this._textTesting;
  }

  get numberTesting(): number | string {
    return this._numberTesting;
  }

  set numberTesting(value: number | string) {
    this._numberTesting = value;
  }

  getTable(): number | any {
    return this._table;
  }

  setTable(formMultiple : NgForm) {
    console.log(formMultiple.value.table) // return object
    let n = formMultiple.value.table
    console.log(n.length)
    if ((n !== this._table) && (n.length !== 0)) {
      this._table = n;
    }
    else if (n === this._table) {
      this.setCloseTable()
    }
    else if (n.length === 0) {
      // console.log('null')
      this.setCloseTable()
    }
  }
  get open(): boolean { // for ngIf
    return this._open;
  }
  setOpen () { // set open
    this._open = true;
  }
  setCloseTable () { // set close
    this._open = false;
  }
  getRefresh() {
    window.location.reload() // get refresh page
  }
}

export {
  ServiceFunctions
}
