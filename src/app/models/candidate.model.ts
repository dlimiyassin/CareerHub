import { Account } from "./account.model";
import { Skils } from "./skils.model";

export interface Candidate extends Account{
  id : number
  firstName : string
  lastName : string
  phone : string
  cv : string
  skils: Skils[]
}
