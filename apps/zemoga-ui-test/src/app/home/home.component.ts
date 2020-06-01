import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Candidate } from '@zemoga-ui-test/api-interfaces';

import { CandidatesService } from '../shared/services/candidates.service';

@Component({
  selector: 'zut-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  candidates = this.candidatesService.candidates;

  constructor(private candidatesService: CandidatesService) {}

  ngOnInit(): void {
    this.candidatesService.getCandidates();
  }

  trackById(candidate: Candidate) {
    return candidate.id;
  }
}
