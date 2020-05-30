import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('candidates features', () => {
    it('should return 4 base candidates', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getCandidates().length).toEqual(4);
    });

    it('should add and return upVoted candidate', () => {
      const appController = app.get<AppController>(AppController);
      const appService = app.get<AppService>(AppService);
      let candidates = appService.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[0].upVotes).toEqual(0);

      const candidate = appController.voteCandidate({
        id: candidates[0].id,
        vote: 1,
      });

      candidates = appService.getCandidates();

      expect(candidate).toEqual(candidates[0]);
      expect(candidate.upVotes).toBe(1);
    });

    it('should add and return upVoted candidate with default vote', () => {
      const appController = app.get<AppController>(AppController);
      const appService = app.get<AppService>(AppService);
      let candidates = appService.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[1].upVotes).toEqual(0);

      const candidate = appController.voteCandidate({
        id: candidates[1].id,
      });

      candidates = appService.getCandidates();

      expect(candidate).toEqual(candidates[1]);
      expect(candidate.upVotes).toBe(1);
    });

    it('should add and return downVoted candidate', () => {
      const appController = app.get<AppController>(AppController);
      const appService = app.get<AppService>(AppService);
      let candidates = appService.getCandidates();

      expect(candidates.length).toEqual(4);
      expect(candidates[0].downVotes).toEqual(0);

      const candidate = appController.voteCandidate({
        id: candidates[0].id,
        vote: -1,
      });

      candidates = appService.getCandidates();

      expect(candidate).toEqual(candidates[0]);
      expect(candidate.downVotes).toBe(1);
    });
  });
});
