export interface Vacancy {
  name: string;
  status: string;
  candidate?: Candidate;
  _id: string;
}

export interface Candidate {
  name: string;
  phone?: string;
  imgSrc?: string;
  _id: string;
}