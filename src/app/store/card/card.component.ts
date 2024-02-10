import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TravelService } from 'src/app/travel.service';
import { UserService } from 'src/app/user.service';
import { StoreComponent } from '../store.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardTitle: string = 'Naslov'

  cardShortDescription: string = 'lorem ipsum dolor sit amaet'

  disabled: boolean = false

  komentari = this.data.comments

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public userService: UserService, public travelService: TravelService) { }

  ngOnInit(): void {
    console.log(this.komentari)
  }

  isDisabled(): boolean{
    var bool: boolean = false
    this.travelService.dummyTravelList[this.data.id - 1].reservedUsers?.forEach(user =>{
      if (this.userService.currentUser!.id == user){
        bool = true
        this.ngOnInit()
      }
    })
    this.ngOnInit()
    return bool
  }

  reserve(id: number) {
    this.travelService.dummyTravelList[id - 1].reservedUsers?.push(this.userService.currentUser!.id)
    console.log(this.travelService.dummyTravelList[id - 1])
    this.ngOnInit()
  }
  

}
