import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { HomeHelpComponent } from './pages/home-help/home-help.component';
import { RegisterHelpComponent } from './pages/register-help/register-help.component';
import { EditHelpComponent } from './pages/edit-help/edit-help.component';
import { TableHelpComponent } from './pages/table-help/table-help.component';

// - Configurations routes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home',     component:  HomeHelpComponent },
      { path: 'register', component:  RegisterHelpComponent },
      { path: 'table', component:  TableHelpComponent },
      { path: 'edit/:id', component:  EditHelpComponent },
      { path: '**',       redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SystemCrudRoutingModule {}
