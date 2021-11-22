import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../../shared/my.validators";

@Component({
  selector: 'app-load-data-page',
  templateUrl: './load-data-page.component.html',
  styleUrls: ['./load-data-page.component.scss']
})
export class LoadDataPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  dataForm = new FormGroup({
    dataInput: new FormControl('', [
      Validators.required,
      MyValidators.noTypeJSON,
      MyValidators.differentStructure
    ])
  })

  get dataInput() {
    return this.dataForm.get('dataInput')
  }


  onSubmit() {
    console.log('Submit', this.dataForm.value)
    console.log('Submit', this.dataForm)
  }
}
