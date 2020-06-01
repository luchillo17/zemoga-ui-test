import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate, ApiVote } from '@zemoga-ui-test/api-interfaces';
import { environment } from 'apps/zemoga-ui-test/src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { produce } from 'immer';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  candidates = new BehaviorSubject<Candidate[]>([]);

  constructor(private http: HttpClient) {}

  getCandidates() {
    return this.http
      .get<Candidate[]>(`/api/candidates`)
      .subscribe((candidates) => this.candidates.next(candidates));
  }

  voteCandidate(vote: ApiVote) {
    return this.http.put<Candidate>(`/api/voteCandidate`, vote).pipe(
      tap((candidate) => {
        const newCandidates = produce(this.candidates.value, (candidates) => {
          const candidateIndex = candidates.findIndex(
            (candidateItem) => candidateItem.id === candidate.id,
          );

          candidates[candidateIndex] = candidate;
        });

        this.candidates.next(newCandidates);
      }),
    );
  }
}
