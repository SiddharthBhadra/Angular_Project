import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//mdb mudoles
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
//components
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PackagesComponent } from './components/packages/packages.component';
//kids
import { KplatinumComponent } from './components/kplatinum/kplatinum.component';
import { KgoldComponent } from './components/kgold/kgold.component';
import { KsilverComponent } from './components/ksilver/ksilver.component';
import { KdestinationComponent } from './components/kplatinum/kdestination/kdestination.component';
import { GoldDestiComponent } from './components/kgold/gold-desti/gold-desti.component';
import { SilverDestiComponent } from './components/ksilver/silver-desti/silver-desti.component';
//teens
import { TgoldComponent } from './components/teens/tgold/tgold.component';
import { TsilverComponent } from './components/teens/tsilver/tsilver.component';
import { TplatinumComponent } from './components/teens/tplatinum/tplatinum.component';
import { TpackageComponent } from './components/teens/tpackage/tpackage.component';
import { PDestiComponent } from './components/teens/p-desti/p-desti.component';
import { GDestiComponent } from './components/teens/g-desti/g-desti.component';
import { SDestiComponent } from './components/teens/s-desti/s-desti.component';

//old age
import { GpackageComponent } from './components/grown/gpackage/gpackage.component';
import { GgoldComponent } from './components/grown/ggold/ggold.component';
import { GplatinumComponent } from './components/grown/gplatinum/gplatinum.component';
import { GsilverComponent } from './components/grown/gsilver/gsilver.component';
import { GpDestiComponent } from './components/grown/gp-desti/gp-desti.component';
import { GgDestiComponent } from './components/grown/gg-desti/gg-desti.component';
import { GsDestiComponent } from './components/grown/gs-desti/gs-desti.component';

//auth-service
import { AuthService } from "./shared/guard/auth.service";

//material
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from  '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule}from '@angular/material/menu';
import {MatListModule}from '@angular/material/list';
import {MatDividerModule}from '@angular/material/divider';
import {MatGridListModule}from '@angular/material/grid-list';
import {MatExpansionModule}from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCarouselModule } from '@ngmodule/material-carousel';

//flex
import { FlexLayoutModule } from "@angular/flex-layout";

//card modules
import { MatCardModule} from '@angular/material/card';

//calender
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//checkout payment
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GcheckoutComponent } from './components/gcheckout/gcheckout.component';
import { ScheckoutComponent } from './components/scheckout/scheckout.component';
import { PcheckoutComponent } from './components/teens/pcheckout/pcheckout.component';
import { TgcheckoutComponent } from './components/teens/tgcheckout/tgcheckout.component';
import { TscheckoutComponent } from './components/teens/tscheckout/tscheckout.component';
import { GpcheckoutComponent } from './components/grown/gpcheckout/gpcheckout.component';
import { GgcheckoutComponent } from './components/grown/ggcheckout/ggcheckout.component';
import { GscheckoutComponent } from './components/grown/gscheckout/gscheckout.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ContactUsComponent,
    PackagesComponent,
    KplatinumComponent,
    KgoldComponent,
    KsilverComponent,
    KdestinationComponent,
    GoldDestiComponent,
    SilverDestiComponent,
    TgoldComponent,
    TsilverComponent,
    TplatinumComponent,
    TpackageComponent,
    PDestiComponent,
    GDestiComponent,
    SDestiComponent,
    GpackageComponent,
    GgoldComponent,
    GplatinumComponent,
    GsilverComponent,
    GpDestiComponent,
    GgDestiComponent,
    GsDestiComponent,
    CheckoutComponent,
    GcheckoutComponent,
    ScheckoutComponent,
    PcheckoutComponent,
    TgcheckoutComponent,
    TscheckoutComponent,
    GpcheckoutComponent,
    GgcheckoutComponent,
    GscheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //mdb mudule
    MDBBootstrapModule.forRoot(),
    //Material
    MatIconModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCarouselModule,
    //flex
    FlexLayoutModule,
    //calender
    BsDatepickerModule.forRoot(),
    //Firebase
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmroeBdt5BlYmP65N9hWvHozszW4hG0NI",
      authDomain: "main-project-c07e3.firebaseapp.com",
      databaseURL: "https://main-project-c07e3.firebaseio.com",
      projectId: "main-project-c07e3",
      storageBucket: "main-project-c07e3.appspot.com",
      messagingSenderId: "734962395655",
      appId: "1:734962395655:web:c73b83332629a7283a58a2",
      measurementId: "G-D3V12Z1G0X"
    })
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
