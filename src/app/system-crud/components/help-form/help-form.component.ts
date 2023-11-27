import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SystemCrudService } from '../../services/system-crud.service';

// ! This allows us to have greater control when receving data from the parent
const actionType = {
  edit: {
    action: 'edit',
    title: 'Edit'
  },
  register: {
    action: 'register',
    title: 'Register'
  }
} as const

// ! create the type
type ActionType = keyof typeof actionType;

@Component({
  selector: 'app-help-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})
export class HelpFormComponent {

  //  Information we will from the father
  @Input() public action!: ActionType;

  // Properties
  public helpForm!: FormGroup;
  public title!: string;

  constructor(
    private formBuilder: FormBuilder,
    private systemService: SystemCrudService
  ){}




}
