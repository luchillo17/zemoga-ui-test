export interface Candidate {
  id: number;
  name: string;
  area: string;
  dateProposed: Date | string;
  description: string;
  upVotes: number;
  downVotes: number;
}

export interface ApiVote {
  id?: number;
  vote?: 1 | -1;
}
