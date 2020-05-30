import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('candidates features', () => {
    it('should return 4 base candidates with 0 votes', () => {
      const candidates = service.getCandidates();

      expect(candidates.length).toEqual(4);

      for (const candidate of candidates) {
        expect(candidate.upVotes).toBe(0);
        expect(candidate.downVotes).toBe(0);
      }
    });

    it('should add and return upVoted candidate', () => {
      let candidates = service.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[0].upVotes).toEqual(0);

      const candidate = service.voteCandidate({
        id: candidates[0].id,
        vote: 1,
      });

      candidates = service.getCandidates();

      expect(candidate).toEqual(candidates[0]);
      expect(candidate.upVotes).toBe(1);
    });

    it('should add and return upVoted candidate with default vote', () => {
      let candidates = service.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[1].upVotes).toEqual(0);

      const candidate = service.voteCandidate({
        id: candidates[1].id,
      });

      candidates = service.getCandidates();

      expect(candidate).toEqual(candidates[1]);
      expect(candidate.upVotes).toBe(1);
    });

    it('should add and return downVoted candidate', () => {
      let candidates = service.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[0].downVotes).toEqual(0);

      const candidate = service.voteCandidate({
        id: candidates[0].id,
        vote: -1,
      });

      candidates = service.getCandidates();

      expect(candidate).toEqual(candidates[0]);
      expect(candidate.downVotes).toBe(1);
    });

    it('should throw with wrong params', () => {
      expect(() => service.voteCandidate()).toThrowError('Invalid params');
      expect(() => service.voteCandidate({})).toThrowError('Invalid params');
      expect(() =>
        service.voteCandidate({ id: 1, vote: 999 } as any),
      ).toThrowError('Invalid params');
    });

    it('should throw with non existent candidate', () => {
      expect(() => service.voteCandidate({ id: 999 })).toThrowError(
        'Candidate not found',
      );
      expect(() => service.voteCandidate({ id: 999, vote: 1 })).toThrowError(
        'Candidate not found',
      );
      expect(() => service.voteCandidate({ id: 999, vote: -1 })).toThrowError(
        'Candidate not found',
      );
    });
  });
});
