class Brackets {
  private static readonly curlyBracketRight: string = '{'
  private static readonly curlyBracketLeft: string = '}'

  static getBracketRight(): string {
    return Brackets.curlyBracketRight
  }

  static getBracketLeft(): string {
    return Brackets.curlyBracketLeft
  }
}

const brackets = {
  curlyBracketR: Brackets.getBracketRight(),
  curlyBracketL: Brackets.getBracketLeft()
}

export {
  brackets
}
