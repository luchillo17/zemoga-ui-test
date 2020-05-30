import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentSearchModule } from '@covalent/core/search';

import { CandidatePanelComponent } from './candidate-panel/candidate-panel.component';

@NgModule({
  declarations: [CandidatePanelComponent],
  imports: [CommonModule, HttpClientModule, MatButtonModule],
  exports: [
    CandidatePanelComponent,
    CommonModule,
    CovalentSearchModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class SharedModule {}
