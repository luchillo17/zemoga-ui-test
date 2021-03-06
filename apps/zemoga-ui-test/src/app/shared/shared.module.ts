import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentSearchModule } from '@covalent/core/search';

import { CandidatePanelComponent } from './components/candidate-panel/candidate-panel.component';
import { SvgTextComponent } from './components/svg-text/svg-text.component';

@NgModule({
  declarations: [CandidatePanelComponent, SvgTextComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [
    CandidatePanelComponent,
    CommonModule,
    CovalentSearchModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    SvgTextComponent,
  ],
})
export class SharedModule {}
