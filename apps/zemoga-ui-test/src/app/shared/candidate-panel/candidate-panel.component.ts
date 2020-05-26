import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zut-candidate-panel',
  templateUrl: './candidate-panel.component.html',
  styleUrls: ['./candidate-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatePanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
