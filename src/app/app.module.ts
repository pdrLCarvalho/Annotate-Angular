import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';

import { TimeComponent } from './components/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideBarComponent,
    LoginScreenComponent,
    AddTaskComponent,
    MainComponent,
    HeaderComponent,

    SignUpComponent,
    TasksComponent,
    TimeComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
