import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(public userService: UserService) { }
  isEditing: boolean = false
  favs = new FormControl('')
  favsOptions: string[] = ['voz', 'avion', 'autobus']



  ngOnInit(): void {
    console.log(this.userService.currentUser)
  }

  isChecked(): boolean{
    return true
  }

  finishEditing(form: NgForm) {
    this.isEditing = false;
    console.log(this.userService.currentUser)
  }

}
