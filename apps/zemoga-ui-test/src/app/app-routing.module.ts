import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'past-trials',
    loadChildren: () =>
      import('./past-trials/past-trials.module').then(
        (m) => m.PastTrialsModule,
      ),
  },
  {
    path: 'how-it-works',
    loadChildren: () =>
      import('./how-it-works/how-it-works.module').then(
        (m) => m.HowItWorksModule,
      ),
  },
  {
    path: 'log-in-sign-up',
    loadChildren: () =>
      import('./log-in-sign-up/log-in-sign-up.module').then(
        (m) => m.LogInSignUpModule,
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
