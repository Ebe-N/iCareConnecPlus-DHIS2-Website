import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";
import { HomeStartComponent } from "./home/home-start/home-start.component";
import { AccountComponent } from "./home/account/account.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, children: [
        {path: '', component: HomeStartComponent},
        {path: 'new', component: AccountComponent},
        {path: ':id/edit', component: AccountComponent}
    ]},
    {path: 'pricing', component: PricingComponent}
]


@NgModule({
     imports: [RouterModule.forRoot(appRoutes)],
     exports: [RouterModule]
})

export class AppRoutingModule{

}