import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditHelpComponent } from './pages/edit-help/edit-help.component';
import { HomeHelpComponent } from './pages/home-help/home-help.component';
import { RegisterHelpComponent } from './pages/register-help/register-help.component';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import { SystemCrudRoutingModule } from './system-crud-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HelpFormComponent } from './components/help-form/help-form.component';



@NgModule({
  declarations: [
    EditHelpComponent,
    HomeHelpComponent,
    RegisterHelpComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    SystemCrudRoutingModule,
    ReactiveFormsModule,
    HelpFormComponent
  ]
})
export class SystemCrudModule { }
