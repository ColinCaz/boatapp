import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { BoatsComponent } from './boats/boats.component';
import { CreateBoatComponent } from './create-boat/create-boat.component';
import { ReadBoatComponent } from './read-boat/read-boat.component';
import { UpdateBoatComponent } from './update-boat/update-boat.component';

const routes: Routes = [
  { path: '', redirectTo: '/boats', pathMatch: 'full' },
  { path: 'boats', component: BoatsComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateBoatComponent, canActivate: [AuthGuard] },
  { path: 'read/:id', component: ReadBoatComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateBoatComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/boats', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }