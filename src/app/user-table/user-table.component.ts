import { Component } from '@angular/core';
import { User } from '../user.model';
import { USERS } from '../users.mock';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent  {
  isUpdateFormActive: boolean = false;
  users: User[] = USERS;

  addUser(newUser: User) {
    // Yeni kullanıcıyı kullanıcılar listesine ekleyin
    console.log('New user added:', newUser);
    this.users.push(newUser);
  }

  removeUser(index: number){
    let result: boolean = confirm ("Kaydı Silmek İstiyor Musunuz?")
    if(result == true){    
      this.users.splice(index,1);
    }
  }
  updateUser(){}
}
