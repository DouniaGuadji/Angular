import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [], // Pas de LoginComponent ici
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
