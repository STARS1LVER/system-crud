import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SystemCrudService } from '../../services/system-crud.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { switchMap, tap } from 'rxjs';

// ! This allows us to have greater control when receving data from the parent
const actionType = {
  edit: {
    action: 'edit',
    title: 'Edit',
    paragraph: 'Edit your help.'
  },
  register: {
    action: 'register',
    title: 'Register Your Help',
    paragraph: 'Register your support.'
  }
} as const

// ! create the type
type ActionType = keyof typeof actionType;

@Component({
  selector: 'app-help-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ErrorMessageComponent],
  templateUrl: './help-form.component.html',
  styleUrls: ['./help-form.component.css']
})
export class HelpFormComponent implements OnInit {

  //  Information we will from the father
  @Input() public action!: ActionType;

  // Properties
  public helpForm!: FormGroup;
  public title!: string;
  public paragraph!: string;
  public dataId!: string
  //
  private readonly emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private systemService: SystemCrudService
  ){}


  ngOnInit(): void {

    // For title
    this.title =
      this.action === actionType.edit.action
        ? actionType.edit.title
        : actionType.register.title

    //  For description
    this.paragraph =
      this.action === actionType.edit.action
        ? actionType.edit.paragraph
        : actionType.register.paragraph

    this.initForm()

    // For id
    this.activatedRoute.params
    .pipe(
      tap(({id}) => this.dataId = id),
      switchMap(({id}) => this.systemService.getDataForTable(id))
    ).subscribe( register => {
      this.helpForm.reset(register)
    })

  }


  public onSubmit(){

    if(this.helpForm.invalid){
      this.helpForm.markAllAsTouched()
      return
    }

    const {name, email, cellphone, help, summary} = this.helpForm.value
    console.log(`${name}, ${email}, ${cellphone}, ${help}, ${summary}`)

    this.action === actionType.edit.action
      ? this.systemService.updateDataHelpForTable(this.dataId, this.helpForm.value)
      : this.systemService.addDataTabla(this.helpForm.value)
  }

  public hasError( field: string  ) : boolean{
    const fieldName = this.helpForm.get(field)
    return !!fieldName?.invalid && fieldName.touched
  }



  private initForm(){
    this.helpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      cellphone: [ '', [Validators.required, Validators.minLength(10)]],
      help: ['', [Validators.required]],
      summary: ['', [Validators.required]],
    })
  }

  public deleteDataForTable(): void {
    this.systemService.deleteDataForTable(this.dataId)
  }



}
