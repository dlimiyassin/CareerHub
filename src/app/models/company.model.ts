import { Account } from "./account.model";

import { Offer } from "./offer.model";

export interface Company extends Account{
  id : number
  name : string
  offers : Offer[]

}
