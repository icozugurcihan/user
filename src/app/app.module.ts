import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    CreateUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
