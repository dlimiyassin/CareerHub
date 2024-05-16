import { Candidate } from "./candidate.model";
import { Offer } from "./offer.model";

export interface Postulation {
  id: number;
  date: Date;
  candidate: Candidate;
  offer: Offer;
}
