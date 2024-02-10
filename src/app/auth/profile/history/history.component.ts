import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Travel } from 'src/app/travel.model';
import { TravelService } from 'src/app/travel.service';
import { LoginComponent } from '../../login/login.component';
import { UserService } from 'src/app/user.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns = ['type', 'name', 'price', 'date', 'likes', 'status', 'actions']

  travelSource = new MatTableDataSource<Travel>()



  cardOpened: boolean = false

  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor( private dialog: MatDialog,private travelService: TravelService, private userService: UserService) { }

  doneTravels = this.userService.currentUser?.doneTravel

  ngOnInit(): void {
    console.log(this.doneTravels)
    this.travelSource.data = this.travelService.getTravels()
    this.travelSource.data = this.getDoneTravels()

    
  }

  ngAfterViewInit(): void {
    this.travelSource.sort = this.sort
    this.travelSource.paginator = this.paginator
}

  doFilter(filterValue: string) {
    this.travelSource.filter = filterValue.trim().toLowerCase()

  }

  getCurrentUserReservations() {
    
    this.travelSource.data = this.getDoneTravels()

  }

  getDoneTravels(): any {
    
    let doneTravelsVar
    let doneTravelsArr = [ ]
    for (var i = 0; i < this.doneTravels!.length; i++){
      doneTravelsVar = this.travelSource.data.find(korisnik => korisnik.id === this.doneTravels![i])
      doneTravelsArr.push(doneTravelsVar)
    }
    return doneTravelsArr
  }

  likeTravel(id: number) {
    let likes = this.travelService.dummyTravelList[id - 1].likes
    let likedUsers = this.travelService.dummyTravelList[id - 1].likeUsers
    console.log(likes)
    console.log(likedUsers)

    this.travelService.dummyTravelList[id - 1].likes = likes + 1
    this.travelService.dummyTravelList[id-1].likeUsers?.push(this.userService.currentUser!.id)

    this.ngOnInit()
  }

  isLiked(id: number) { 
    let likedUsers = this.travelService.dummyTravelList[id - 1].likeUsers
    if (likedUsers?.includes(this.userService.currentUser!.id)) {
      return true
    } else {
      return false
    }
  }

  openComment(travelId: number) {
    console.log('klik')
    this.cardOpened = true

    const cardDialog = this.dialog.open(CommentComponent, {
      disableClose: true,
      width: '30vw',
      data: this.travelService.getTravelById(travelId)
    })

    cardDialog.afterClosed().subscribe(result => {
      this.cardOpened = false
    })
  }
  

}
