import {FormControl} from "@angular/forms";

export class MyValidators {
  static noTypeJSON(control: FormControl): { [key: string]: boolean } | null {
    try {
      JSON.parse(control.value);
    } catch (e) {
      return {noTypeJSON: true}
    }
    return null
  }
}


