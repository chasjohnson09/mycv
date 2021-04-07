import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "mycv";
  name: string = "Charles Johnson";
  address: string = "240 Fernway Dr., Fairfield Township, OH, 45011";
  phone: string  = "513-939-4030";
  email: string = "chasjohnson09@gmail.com";

  bluebuttonStyle: string = "btn btn-primary";
  redbuttonStyle: string = "btn btn-danger";
  buttonStyle: string = this.redbuttonStyle; 

  showPersonal = null;

  togglePersonal(): void {
    this.showPersonal = true;
  }

  constructor(
    private usrsvc: UserService
  ) {
    this.usrsvc.list().subscribe(
      users => { console.log(users);},
      err => { console.error(err);}
    );
  }
}
