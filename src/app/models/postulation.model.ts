import { Candidate } from "./candidate.model";
import { Offer } from "./offer.model";

export interface Postulation {
  id? : string,
  offer_id: string;
  candidate_id: string;
  company_id : string;
  note : string;
  date: Date;
}
