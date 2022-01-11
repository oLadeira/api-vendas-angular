import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
