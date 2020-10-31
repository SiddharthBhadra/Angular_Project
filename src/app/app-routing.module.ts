import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "../../src/app/shared/guard/auth.guard";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PackagesComponent } from './components/packages/packages.component';
//kids package
import { KplatinumComponent} from './components/kplatinum/kplatinum.component';
import { KgoldComponent} from './components/kgold/kgold.component';
import { KsilverComponent} from './components/ksilver/ksilver.component';
import { KdestinationComponent} from './components/kplatinum/kdestination/kdestination.component';
import { GoldDestiComponent } from './components/kgold/gold-desti/gold-desti.component';
import { SilverDestiComponent } from './components/ksilver/silver-desti/silver-desti.component';
//teens
import { TgoldComponent } from './components/teens/tgold/tgold.component';
import { TsilverComponent } from './components/teens/tsilver/tsilver.component';
import { TplatinumComponent } from './components/teens/tplatinum/tplatinum.component';
import { TpackageComponent } from './components/teens/tpackage/tpackage.component';
import { GDestiComponent } from './components/teens/g-desti/g-desti.component';
import { PDestiComponent } from './components/teens/p-desti/p-desti.component';
import { SDestiComponent } from './components/teens/s-desti/s-desti.component';
//old
import { GgDestiComponent } from './components/grown/gg-desti/gg-desti.component';
import { GpDestiComponent } from './components/grown/gp-desti/gp-desti.component';
import { GsDestiComponent } from './components/grown/gs-desti/gs-desti.component';
import { GgoldComponent } from './components/grown/ggold/ggold.component';
import { GsilverComponent } from './components/grown/gsilver/gsilver.component';
import { GplatinumComponent } from './components/grown/gplatinum/gplatinum.component';
import { GpackageComponent } from './components/grown/gpackage/gpackage.component';
//checkout
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GcheckoutComponent } from './components/gcheckout/gcheckout.component';
import { ScheckoutComponent } from './components/scheckout/scheckout.component';
import { PcheckoutComponent } from './components/teens/pcheckout/pcheckout.component';
import { TgcheckoutComponent } from './components/teens/tgcheckout/tgcheckout.component';
import { TscheckoutComponent } from './components/teens/tscheckout/tscheckout.component';
import { GpcheckoutComponent } from './components/grown/gpcheckout/gpcheckout.component';
import { GgcheckoutComponent } from './components/grown/ggcheckout/ggcheckout.component';
import { GscheckoutComponent } from './components/grown/gscheckout/gscheckout.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'contact-us', component:ContactUsComponent},
  { path: 'packages', component:PackagesComponent},
  //kids
  { path: 'kplatinumComponent', component:KplatinumComponent},
  { path: 'ksilverComponent', component:KsilverComponent},
  { path: 'kgoldComponent', component:KgoldComponent},
  { path: 'kdestinationComponent', component:KdestinationComponent},
  { path: 'golddesti', component:GoldDestiComponent},
  { path: 'silverdesti', component: SilverDestiComponent},
  //teens
  { path: 'tgold' , component: TgoldComponent},
  { path: 'tsilver', component: TsilverComponent},
  { path: 'tplatinum', component: TplatinumComponent},
  { path: 'tpackage', component: TpackageComponent},
  { path: 'gdesti', component: GDestiComponent},
  { path: 'pdesti', component: PDestiComponent},
  { path: 'sdesti', component: SDestiComponent},
  //old
  { path: 'ggdesti', component: GgDestiComponent},
  { path: 'gpdesti', component: GpDestiComponent},
  { path: 'gsdesti', component: GsDestiComponent},
  { path: 'ggold', component: GgoldComponent},
  { path: 'gsilver', component: GsilverComponent},
  { path: 'gplatinum', component: GplatinumComponent},
  { path: 'gpackage', component: GpackageComponent},
  //checkout
  { path: 'check', component: CheckoutComponent},
  { path: 'gcheck', component: GcheckoutComponent},
  { path: 'scheck', component: ScheckoutComponent},
  { path: 'tpcheck', component: PcheckoutComponent},
  { path: 'tgcheck', component: TgcheckoutComponent},
  { path: 'tscheck', component: TscheckoutComponent},
  { path: 'gpcheck', component: GpcheckoutComponent},
  { path: 'ggcheck', component: GgcheckoutComponent},
  { path: 'gscheck', component: GscheckoutComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }