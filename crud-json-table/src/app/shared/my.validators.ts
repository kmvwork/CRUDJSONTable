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
      let result = JSON.parse(control.value)

      for (let i = 0; i <= result.length; i++) {
        const keys1 = Object.keys(result[i])
        for (let i = 1; i <= keys1.length; i++) {
          const keys2 = Object.keys(result[i])
          if (keys1.length != keys2.length) return {differentStructure: true};
          for (let key of keys1) {
            if (!keys2.includes(key)) return {differentStructure: true}
          }
        }
      }
      return null
    } catch (e) {
      return {differentStructure: true}
    }
  }
}


