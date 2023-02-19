import { Component } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password-complexity',
  templateUrl: './password-complexity.component.html',
  styleUrls: ['./password-complexity.component.scss']
})
export class PasswordComplexityComponent {

  constructor(private passwordService: PasswordService) { }

  get passwordStrengthClass(): string {
    const passwordStrength = this.passwordService.statePasswordStrength;
    return passwordStrength ? `password__strength-${passwordStrength}` : '';
  }
}
