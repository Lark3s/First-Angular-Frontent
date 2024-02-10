import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TravelService } from '../travel.service';
import { Travel } from '../travel.model';
import { MatSort, Sort } from '@angular/material/sort';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})


export class StoreComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource = new MatTableDataSource<Travel>();

  cardOpened: boolean = false



  constructor(private changeDetectorRef: ChangeDetectorRef, private travelService: TravelService, public userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.userService.isLoggedIn()

    this.dataSource.data = this.getUpcomingTravels()
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  doFilter(filterValue: string): void {

    console.log(filterValue)
  }

  doSearch(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  openCard(cardId: number){
    console.log('klik')
    this.cardOpened = true

    const cardDialog = this.dialog.open(CardComponent, {
      disableClose: true,
      width: '30vw',
      data: this.travelService.getTravelById(cardId)
    })

    cardDialog.afterClosed().subscribe(result => {
      this.cardOpened = false
    })

  }

  getUpcomingTravels(): any {
    let upcomingTravelsArr = [ ]
    for (var i = 0; i < this.travelService.dummyTravelList.length; i++){
      if (this.travelService.dummyTravelList[i].status === 'upcoming'){
        upcomingTravelsArr.push(this.travelService.dummyTravelList[i])
      }
    }
    return upcomingTravelsArr
  }

}
