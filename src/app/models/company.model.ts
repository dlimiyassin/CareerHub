import { Account } from "./account.model";

import { Offer } from "./offer.model";

export interface Company extends Account{
  id ?: string
  companyName : string
  phone : string
  offers : Offer[]

}
