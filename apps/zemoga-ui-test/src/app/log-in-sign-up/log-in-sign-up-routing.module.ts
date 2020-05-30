import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInSignUpComponent } from './log-in-sign-up.component';

const routes: Routes = [{ path: '', component: LogInSignUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInSignUpRoutingModule {}
