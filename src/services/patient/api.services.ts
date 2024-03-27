import { baseClient } from "../api.cilents"
import { Endpoints } from "../constants"

export const addPatient = (payload:any) => {
   return baseClient.post(Endpoints.registerPatient, payload)
}