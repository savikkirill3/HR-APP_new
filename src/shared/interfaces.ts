export interface Vacancy {
  name: string;
  status: string;
  candidates?: Candidate[];
  id: string;
}

export interface Candidate {
  name: string;
  surname: string;
  phone?: string;
  photo?: string;
  id: string;
}
