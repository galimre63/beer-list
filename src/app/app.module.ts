import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing.module';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
    imports: [
      NgModule,
      CommonModule,
      BrowserModule,
      ReactiveFormsModule,
      HttpClientModule,
      routing
    ],
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent
    ],
    providers: [ AuthGuard ],
    bootstrap: [AppComponent]
})

export class AppModule { }