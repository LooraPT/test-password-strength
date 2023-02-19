import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-password',
  templateUrl: './test-password.component.html',
  styleUrls: ['./test-password.component.scss']
})
export class TestPasswordComponent implements OnInit {
  formData: FormGroup

  ngOnInit(): void {
    this.initFormGroup()
  }

  initFormGroup(): void {
    this.formData = new FormGroup({
      password: new FormControl<string>('')
    })
  }

  onSubmit() {
    console.log(this.formData.value)
  }
}
