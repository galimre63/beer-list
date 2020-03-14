import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing.module';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
    imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent
    ],
    providers: [ AuthGuard ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }