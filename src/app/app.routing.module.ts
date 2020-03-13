import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [ 
    LoginComponent, MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: MainComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ],

})
export class AppRoutingModule {}


