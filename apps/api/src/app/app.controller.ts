import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiVote, Candidate } from '@zemoga-ui-test/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('candidates')
  getCandidates(): Candidate[] {
    return this.appService.getCandidates();
  }

  @Get('resetVotes')
  resetVotes(): Candidate[] {
    return this.appService.resetVotes();
  }

  @Put('voteCandidate')
  voteCandidate(@Body() apiVote: ApiVote) {
    return this.appService.voteCandidate(apiVote);
  }
}
