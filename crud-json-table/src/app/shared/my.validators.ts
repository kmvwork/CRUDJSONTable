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

  static differentStructure(control: FormControl): { [key: string]: boolean } | null {
    try {
      let arr = JSON.parse(control.value)

      const result = arr.every((v: object) => {
        const a = Object.keys(arr[0]).sort().join(',');
        const b = Object.keys(v).sort().join(',');
        return a === b;
      });

      return result ? null : {differentStructure: true}
    } catch (e) {
      return {differentStructure: true}
    }
  }
}

// [{"name":"Name 1","year":"2010"},{"name":"Name 2","year":"1997"},{"name":"Name 3","year":"2004"}]



