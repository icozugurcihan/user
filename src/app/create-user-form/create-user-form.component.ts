import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {
  userName: string = '';
  userEmail: string = '';
  userAge: number | null = null;

  onClick(){
    console.log('Butona basildi');
  }
  @Output() userCreated: EventEmitter<any> = new EventEmitter<any>();
  createUser() {
    
    const newUser = {
      name: this.userName,
      email: this.userEmail,
      age: this.userAge
    };

    console.log('new user:',newUser);
    
    this.userCreated.emit(newUser);

    this.userName = '';
    this.userEmail = '';
    this.userAge = 0;
  }
  
}
