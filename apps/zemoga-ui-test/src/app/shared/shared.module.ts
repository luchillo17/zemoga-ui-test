import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CandidatePanelComponent } from './candidate-panel/candidate-panel.component';

@NgModule({
  declarations: [CandidatePanelComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CandidatePanelComponent],
})
export class SharedModule {}
