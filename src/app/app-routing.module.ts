import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { uauthGuard } from './auth/uguard.guard';
import { vauthGuard } from './auth/vguard.guard';
import { RestaurantCComponent } from './restaurant-c/restaurant-c.component';
import { CReservationsComponent } from './c-reservations/c-reservations.component';
import { RestaurantsMapComponent } from './restaurants-map/restaurants-map.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:SignupLoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'customer_h',component:CustomerHomeComponent,canActivate:[uauthGuard]},
  {path:'rest',component:RestaurantCComponent,canActivate:[uauthGuard]},
  {path:'myReservations',component:CReservationsComponent,canActivate:[uauthGuard]},
  {path:'map',component:RestaurantsMapComponent,canActivate:[uauthGuard]},
  {path:'vendor_h',component:VendorHomeComponent,canActivate:[vauthGuard]},
  {path:'**',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
