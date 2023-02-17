import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPasswordComponent } from './components/test-password/test-password.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordComplexityComponent } from './components/password-complexity/password-complexity.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPasswordComponent,
    PasswordInputComponent,
    PasswordComplexityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
