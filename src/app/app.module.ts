import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from 'src/app/user.service'
import { StoreComponent } from './store/store.component';
import { BasketComponent } from './basket/basket.component';
import { TravelService } from './travel.service';
import { CardComponent } from './store/card/card.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { DataComponent } from './auth/profile/data/data.component';
import { HistoryComponent } from './auth/profile/history/history.component';
import { BasketService } from './basket.service';
import { CommentComponent } from './auth/profile/history/comment/comment.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    StoreComponent,
    BasketComponent,
    CardComponent,
    ProfileComponent,
    DataComponent,
    HistoryComponent,
    CommentComponent
    
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UserService, TravelService, BasketService ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
