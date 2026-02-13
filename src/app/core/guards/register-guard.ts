import { CanDeactivateFn } from '@angular/router';
import { Register } from '../../pages/register/register';

export const registerGuard: CanDeactivateFn<Register> = (component, currentRoute, currentState, nextState) => {
  if(component.registerationForm.valid) {
    const alert = window.confirm('your data will be lose');
    return alert;
  }
  return true;
};
