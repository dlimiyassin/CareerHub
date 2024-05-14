import { Account } from "./account.model";
import { Offer } from "./offer.model";

export interface Company{
  id : number
  name : string
  offers : Offer[]
}
