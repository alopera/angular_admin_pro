import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes} from "@angular/router";
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
