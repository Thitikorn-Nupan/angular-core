class Brackets {

  private readonly curlyBracketRight : string = '{'
  private readonly curlyBracketLeft : string = '}'

  getBracketRight() : string {
     return this.curlyBracketRight
  }
  getBracketLeft() : string {
    return this.curlyBracketLeft
  }


}

const BracketsClass = new Brackets()

const brackets = {
    curlyBracketR : BracketsClass.getBracketRight(),
    curlyBracketL : BracketsClass.getBracketLeft()
}

export {
  brackets
}
