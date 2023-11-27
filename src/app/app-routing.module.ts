import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'system',
    loadChildren: () => import('./system-crud/system-crud.module').then( modulo =>  modulo.SystemCrudModule )
  },
  {
    path: '**',
    redirectTo: 'system'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
