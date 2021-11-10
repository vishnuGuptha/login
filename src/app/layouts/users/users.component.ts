import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService ) { }

  users:any[] = [];
  ngOnInit(): void {

    this.users = this.service.users;
    console.log(this.users);

  }


}
