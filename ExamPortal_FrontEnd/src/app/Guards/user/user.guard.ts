import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { TestEdgeAuthService } from 'src/app/Services/Auth_Handler/test-edge-auth.service';
import Swal from 'sweetalert2';

export const userGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
const authService=inject(TestEdgeAuthService);
const snak=inject(MatSnackBar)
if(authService.getToken() != null && authService.getRole ()==="USER")
{
  return true;
}
else{
  Swal.fire("Unauthorized!","You are not allowed!",'warning')
  return false
}
router.navigate(["/home"])
return false;
};
