import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TravelService } from '../travel.service';
import { Travel } from '../travel.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, AfterViewInit {

  displayedColumns = ['type', 'name', 'price', 'date', 'likes', 'status', 'actions']

  travelSource = new MatTableDataSource<Travel>()

  status = ''

  reservedTravelsForUser = []

  idCU = this.userService.currentUser?.id

  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor( private travelService: TravelService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isLoggedIn()
    this.travelSource.data = this.travelService.getTravels()
    this.travelSource.data = this.getReservedTravels()
    console.log(this.travelSource.data)
  }

  ngAfterViewInit(): void {
    this.travelSource.sort = this.sort
    this.travelSource.paginator = this.paginator
  }

  doFilter(filterValue: string) {
    this.travelSource.filter = filterValue.trim().toLowerCase()
  }

  getTotalCost() {
    return this.travelSource.data.map(t => t.price).reduce((x, val) => x + val, 0)
  }

  getCurrentUserReservations() {
    
    this.travelSource.data = this.getReservedTravels()
    console.log(this.getReservedTravels())
  }

  getReservedTravels(): any {
    let reservedTravelsArr = []
    for (var i = 0; i < this.travelService.dummyTravelList.length; i++){
      if (this.travelService.dummyTravelList[i].reservedUsers?.includes(this.idCU!)){
        reservedTravelsArr.push(this.travelService.dummyTravelList[i])
      }
    }
    return reservedTravelsArr
  }

  deleteTrip(id: number){
    var index = this.travelService.dummyTravelList[id - 1].reservedUsers?.indexOf(this.idCU!)
    console.log(index)
    this.travelService.dummyTravelList[id - 1].reservedUsers!.splice(index!)
    this.userService.currentUser!.doneTravel?.push(id)
    this.ngOnInit()
  }

  isDisabledDelete() {
    if (this.status === 'upcoming' || this.status === 'cancelled') {
      return true
    } else {
      return false
    }
      

  }

  isDisabledCancel() {
    if (this.status === 'upcoming') {
      return false
    } else {
      return true
    }
  }



  getStatus(travel: Travel){
    if (travel.cancelledUsers?.find(id => id === this.idCU)) {
      this.status = 'cancelled'
      return 'cancelled'
    }
    if (travel.status === 'done') {
      this.status = 'done'
      return 'done'
    }
    this.status = 'upcoming'
    return 'upcoming'
  }
  
  cancelTrip(id: number) {
    this.travelService.dummyTravelList[id - 1].cancelledUsers?.push(this.userService.currentUser!.id)
    console.log(this.travelService.dummyTravelList[id - 1])
    
    this.ngOnInit()
  }

}
