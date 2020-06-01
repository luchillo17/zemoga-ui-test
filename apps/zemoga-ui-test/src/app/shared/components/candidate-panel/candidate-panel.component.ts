/// <reference path="../../../shared/interfaces/intl.d.ts" />
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Candidate, ApiVote } from '@zemoga-ui-test/api-interfaces';
import { differenceInMonths } from 'date-fns';
import { isNil } from 'lodash';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'zut-candidate-panel',
  templateUrl: './candidate-panel.component.html',
  styleUrls: ['./candidate-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidatePanelComponent implements OnInit {
  @Input() candidate: Candidate;

  timeFormatter = new Intl.RelativeTimeFormat();

  constructor(public candidatesService: CandidatesService) {}

  ngOnInit(): void {}

  getCandidateSubtitle(candidate: Candidate) {
    return `${this.getRelativeDate(candidate.dateProposed)} in ${
      candidate.area
    }`;
  }

  getRelativeDate(date: Candidate['dateProposed']) {
    if (isNil(date)) {
      return '';
    }
    const months = differenceInMonths(new Date(), new Date(date));

    return this.timeFormatter.format(-months, 'months');
  }

  voteUp() {
    this.voteCandidate({ id: this.candidate.id, vote: 1 });
  }

  voteDown() {
    this.voteCandidate({ id: this.candidate.id, vote: -1 });
  }

  voteCandidate(vote: ApiVote) {
    this.candidatesService.voteCandidate(vote).subscribe(
      () => {
        alert('Vote recorded, can vote multiple times.');
      },
      (err) => {
        console.error('Vote error: ', err);
      },
    );
  }

  thumbsPercentage(votes) {
    const total = this.candidate.upVotes + this.candidate.downVotes;

    if (total === 0) {
      return 50;
    }

    return Math.round((votes / total) * 100);
  }

  thumbsUpPercentage() {
    return this.thumbsPercentage(this.candidate.upVotes);
  }

  thumbsDownPercentage() {
    return this.thumbsPercentage(this.candidate.downVotes);
  }

  thumbsUpWidth() {
    return `${this.thumbsUpPercentage()}%`;
  }

  thumbsDownWidth() {
    return `${this.thumbsDownPercentage()}%`;
  }
}
