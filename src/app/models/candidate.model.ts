import { Account } from "./account.model";

export interface Candidate extends Account{
  id? : string
  firstName : string
  lastName : string
  phone : string
  cv : string
  skils: string[]
}
