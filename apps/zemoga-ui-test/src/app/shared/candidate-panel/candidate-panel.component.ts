import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Candidate } from '@zemoga-ui-test/api-interfaces';

@Component({
  selector: 'zut-candidate-panel',
  templateUrl: './candidate-panel.component.html',
  styleUrls: ['./candidate-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatePanelComponent implements OnInit {
  @Input() candidateId: Candidate['id'];

  constructor() {}

  ngOnInit(): void {}
}
