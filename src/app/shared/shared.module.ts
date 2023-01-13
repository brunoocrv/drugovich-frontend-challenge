import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ClientComponent
  ],
})
export class SharedModule { }
