import { NgModule } from '@angular/core';

import { PastTrialsRoutingModule } from './past-trials-routing.module';
import { PastTrialsComponent } from './past-trials.component';

@NgModule({
  declarations: [PastTrialsComponent],
  imports: [PastTrialsRoutingModule],
})
export class PastTrialsModule {}
