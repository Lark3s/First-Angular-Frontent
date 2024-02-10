import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TravelService } from 'src/app/travel.service';
import { UserService } from 'src/app/user.service';
import { Comments } from "../../../../comment.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  variable: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService, public travelService: TravelService) { }

  ngOnInit(): void {
    console.log(this.travelService.dummyTravelList[0].comments)
    console.log(this.travelService.dummyTravelList[1].comments)
  }

  onSubmit(f: NgModel) {
    console.log(this.travelService.dummyTravelList[this.data.id - 1].comments)
    console.log(f.value)
    this.travelService.dummyTravelList[this.data.id - 1].comments?.push({"userId":this.userService.currentUser!.id, "comment": f.value})
    console.log(this.travelService.dummyTravelList[this.data.id - 1].comments)
  }

  finishEditing(form: NgForm) {
    console.log("form.value: ",form.value)
    console.log(this.data.id)

    console.log(form.value.comment)

    this.travelService.leaveComment(this.data.id, form.value.comment)
    console.log(this.travelService.dummyTravelList[this.data.id - 1].comments)
  }

  leaveComment(id: number) {
  
  }
  
}
