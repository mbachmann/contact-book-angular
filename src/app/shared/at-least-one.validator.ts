import {
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

/**
 * Checks if at least one of the controls contains a content
 * @param validator
 * @param controls
 */
export const atLeastOne = (validator: ValidatorFn, controls:string[]) => (group: FormGroup,): ValidationErrors | null => {
  if(!controls){
    controls = Object.keys(group.controls)
  }

  const hasAtLeastOne = group && group.controls && controls
    .some(k => !validator(group.controls[k]));

  return hasAtLeastOne ? null : {
    atLeastOne: true,
  };
};
