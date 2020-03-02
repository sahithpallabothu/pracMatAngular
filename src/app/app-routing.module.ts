import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../app/admin/admin.component';
import { ContactsComponent } from '../app/contacts/contacts.component';

const routes: Routes = [
  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {path:'admin',component:AdminComponent},
  {path:'contacts',component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
