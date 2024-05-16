import { Account } from "./account.model";

export interface Candidate extends Account{
  id? : number
  firstName : string
  lastName : string
  phone : string
  cv : string
  skils: []
}
