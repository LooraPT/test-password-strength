import { Component } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-password-complexity',
  templateUrl: './password-complexity.component.html',
  styleUrls: ['./password-complexity.component.scss']
})
export class PasswordComplexityComponent {

  constructor(public passwordService: PasswordService) {}
}
