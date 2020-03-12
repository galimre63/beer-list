import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Auth } from './auth.guard';

@NgModule({
  declarations: [ 
    LoginComponent, MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, canActivate: [Auth] },
      { path: '', component: MainComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


