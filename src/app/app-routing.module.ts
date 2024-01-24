import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSetupComponent } from './client-setup/client-setup.component';
import { BillingsComponent } from './billings/billings.component';
import { NewClientsComponent } from './new-clients/new-clients.component';

const routes: Routes = [
  {path: '', redirectTo: 'client-setup', pathMatch: 'full'},
  {path: 'client-setup', component: ClientSetupComponent},
  {path: 'billings', component: BillingsComponent},
  {path: 'new-clients', component: NewClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
