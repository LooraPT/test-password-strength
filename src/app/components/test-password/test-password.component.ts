import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-password',
  templateUrl: './test-password.component.html',
  styleUrls: ['./test-password.component.scss']
})
export class TestPasswordComponent implements OnInit {
  statePasswordStrength: string = ''
  letter = false
  symbol = false
  digit = false

  formData = new FormGroup({
    password: new FormControl<string>('')
  })

  checkSymbol(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 32 && password.charCodeAt(i) <= 47 || password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64 ||
        password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96 || password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 126) {
        return true
      }
    }
    return false
  }

  checkDigit(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        return true
      }
    }
    return false
  }

  checkLetter(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90 || password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
        return true
      }
    }
    return false
  }

  checkPassword(): string {
    if (this.formData.value.password && this.formData.value.password?.length < 8) {
      return 'minEight'
    }
    if (this.formData.value.password && this.formData.value.password?.length >= 8) {
      this.digit = this.checkDigit(this.formData.value.password)
      this.letter = this.checkLetter(this.formData.value.password)
      this.symbol = this.checkSymbol(this.formData.value.password)

      if (this.digit && this.letter && this.symbol) {
        return 'strong'
      }

      if (this.digit && this.letter || this.digit && this.symbol || this.letter && this.symbol) {
        return 'medium'
      }

      if (this.digit || this.letter || this.symbol) {
        return 'easy'
      }
    }
    return ''
  }

  ngOnInit(): void {
    this.formData.valueChanges.subscribe(a => this.statePasswordStrength = this.checkPassword())
  }

  submit() {
    console.log(this.formData.value.password)
    console.log(this.statePasswordStrength)
  }
}
