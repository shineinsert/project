import { FormControl, Validators } from '@angular/forms';

// setup simple regex for white listed characters
const validCharacters = /[^\s\w,.:&\/()+%'`@-]/;

export class CustomValidators {

  static validateEmails(c: FormControl) {
    const EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let inValid = null;
    c.value.forEach((item) => {
      if (!EMAIL_REGEXP.test(item)) {
        inValid = { email: true };
      }
    });
    return inValid;
  }

  static validateAutoComplete(c: FormControl) {
    let inValid = null;
    console.log(c);
    console.log(c.value);

    if (c.value ==  0) {
      inValid = true;
    }
    else {
      inValid = false;
    }
    //c.value.forEach((item) => {
    //  if (!EMAIL_REGEXP.test(item)) {
    //    inValid = { email: true };
    //  }
    //});
    console.log(inValid)
    return inValid;
  }

  static validateCharacters(control: FormControl) {

    // first check if the control has a value
    if (control.value && control.value.length > 0) {

      // match the control value against the regular expression
      const matches = control.value.match(validCharacters);

      // if there are matches return an object, else return null.
      return matches && matches.length ? { invalid_characters: matches } : null;
    } else {
      return null;
    }
  }

  static validateRequired(c: FormControl) {
    if (c.value.length === 0) {
      return { required: true };
    } else {
      return null;
    }
  }
}
