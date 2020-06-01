export interface Candidate {
  id: number;
  name: string;
  area: string;
  dateProposed: Date | string;
  description: string;
  upVotes: number;
  downVotes: number;
  imgPath: string;
}

export interface ApiVote {
  id?: number;
  vote?: 1 | -1;
}
