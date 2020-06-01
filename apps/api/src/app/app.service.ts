import { Injectable } from '@nestjs/common';
import { ApiVote, Candidate } from '@zemoga-ui-test/api-interfaces';
import { subMonths } from 'date-fns';
import { produce } from 'immer';
import { isNil, isNumber } from 'lodash';

let candidates: Candidate[] = [
  {
    id: 1,
    name: 'Kanye West',
    area: 'Entertainment',
    description:
      'Vestibulum diam ante, porttitor a odio eget rhoncus neque. Aenean eu velit libero.',
    dateProposed: subMonths(new Date(), 1),
    upVotes: 0,
    downVotes: 0,
    imgPath: '/assets/imgs/kanye_west.png',
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    area: 'Business',
    description: 'Thank you for voting!',
    dateProposed: subMonths(new Date(), 1),
    upVotes: 0,
    downVotes: 0,
    imgPath: '/assets/imgs/mark_zuckerberg.png',
  },
  {
    id: 3,
    name: 'Christina Fernández de Kirchner',
    area: 'Politics',
    description:
      'Vestibulum diam ante, porttitor a odio eget rhoncus neque. Aenean eu velit libero.',
    dateProposed: subMonths(new Date(), 1),
    upVotes: 0,
    downVotes: 0,
    imgPath: '/assets/imgs/christina_fernández.png',
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    area: 'Entertainment',
    description:
      'Vestibulum diam ante, porttitor a odio eget rhoncus neque. Aenean eu velit libero.',
    dateProposed: subMonths(new Date(), 1),
    upVotes: 0,
    downVotes: 0,
    imgPath: '/assets/imgs/malala_yousafzai.png',
  },
];

@Injectable()
export class AppService {
  getCandidates(): Candidate[] {
    return candidates;
  }

  resetVotes() {
    candidates = produce(candidates, (candidatesDraft) => {
      for (const candidate of candidatesDraft) {
        candidate.upVotes = 0;
        candidate.downVotes = 0;
      }
    });

    return candidates;
  }

  voteCandidate({ id, vote = 1 }: ApiVote = { id: null, vote: 1 }): Candidate {
    if (!isNumber(id) || !isNumber(vote) || (vote !== 1 && vote !== -1)) {
      throw new Error('Invalid params');
    }

    const candidateIndex = candidates.findIndex(
      (candidateItem) => candidateItem.id === id,
    );

    if (isNil(candidateIndex) || candidateIndex < 0) {
      throw new Error('Candidate not found');
    }

    candidates = produce(candidates, (candidatesDraft) => {
      if (vote === 1) {
        candidatesDraft[candidateIndex].upVotes++;
      } else {
        candidatesDraft[candidateIndex].downVotes++;
      }
    });

    return candidates[candidateIndex];
  }
}
