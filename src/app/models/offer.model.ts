import { Skils } from "./skils.model"

export interface Offer{
  id? : string 
  title : string
  description : string
  salary : number
  place : string
  skills? : string[]
}
