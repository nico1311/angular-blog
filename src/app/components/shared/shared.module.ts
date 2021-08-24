import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule,
    ButtonComponent
  ]
})
export class SharedModule { }
