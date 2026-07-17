class Phone {
  private _brand: string | null
  private _model: string | null
  private _system: string | null
  private _price: number | null

  constructor() {
    this._brand = 'Apple';
    this._model = 'Iphone XS';
    this._system = 'IOS';
    this._price = 12000;
  }

  getBrand(): string | null {
    return 'Brand : ' + this._brand;
  }

  setBrand(brand: string | null) {
    this._brand = brand
  }

  getModel(): string | null {
    return 'Model : ' + this._model;
  }

  setModel(model: string | null) {
    this._model = model
  }

  setModelAsHTML(model: HTMLInputElement) {
    this._model = model.value
  }

  getPrice(): number | null {
    return this._price;
  }

  setPrice(price: number | null) {
    this._price = price
  }

  getSystem(): string | null {
    return 'OS : ' + this._system;
  }

  setSystem(system: string | null) {
    this._system = system
  }
  
  // specify return type
  getObjectOfPhone(): { p1: Phone, p2: Phone, stores: string[] } {
    const p1 = new Phone()
    const p2 = new Phone()
    p1.setModel('Iphone 10 Pro Max')
    p1.setPrice(25000)
    p2.setModel('Iphone 7 Plus')
    p2.setPrice(7900)
    return {
      p1: p1, // ex when use => getObjectOfPhone().p1.getPrice()
      p2: p2,
      stores: [ // can use ngFor used to loop
        'Central Rama II',
        'Central Rama III',
        'The mall']
    }
  }
}

export {
  Phone
}
