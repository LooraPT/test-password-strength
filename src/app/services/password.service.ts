import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private _statePasswordStrength: string = ''

  checkPassword(password: string): void {
    if (!password) {
      this._statePasswordStrength = ''
      return
    }

    if (password.length < 8) {
      this._statePasswordStrength = 'minEight'
      return
    }

    const { hasLetters, hasSymbols, hasDigits } = this.checkLettersSymbolsDigits(password)

    if (hasDigits && hasLetters && hasSymbols) {
      this._statePasswordStrength = 'strong'
      return
    }

    if (hasDigits && hasLetters || hasDigits && hasSymbols || hasLetters && hasSymbols) {
      this._statePasswordStrength = 'medium'
      return
    }

    this._statePasswordStrength = 'easy'
  }

  private checkLettersSymbolsDigits(password: string) {
    let hasLetters = false
    let hasSymbols = false
    let hasDigits = false

    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i)

      if (char >= 65 && char <= 90 || char >= 97 && char <= 122) {
        hasLetters = true
      } else if (char >= 48 && char <= 57) {
        hasDigits = true
      } else hasSymbols = true
    }

    return {
      hasLetters,
      hasSymbols,
      hasDigits
    }
  }

  get statePasswordStrength(): string {
    return this._statePasswordStrength
  }
}
