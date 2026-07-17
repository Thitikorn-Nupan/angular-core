class User {
  private _userId: number
  private _id: number
  private _title: string
  private _completed: boolean

  constructor(userId: number, id: number, title: string, completed: boolean) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._completed = completed;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}

export {
  User
}

