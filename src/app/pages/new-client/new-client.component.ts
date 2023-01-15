import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {
  newClientButton: string = 'SAVE';
  newButtonClass: string = 'success';
  newButtonType: string = 'submit';
  isSubmitted: boolean = false;

  Status: any = ['Active', 'Inactive'];

  constructor(private formBuilder: FormBuilder) { }

  public clientForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    cnpj: ['', Validators.required],
    status: ['', Validators.required]
  })

  public handleStatusChange(event: any) {
    this.statusName?.setValue(event.target.value, {
      onlySelf: true
    })
  }

  get statusName() {
    return this.clientForm.get('status');
  }

  public handleSubmit() {
    this.isSubmitted = true;
    console.log(this.clientForm.value);

    if (!this.clientForm.valid) {
      return alert('Please set value to the fields.')
    }

    // this.clientForm.reset();
  }
}
