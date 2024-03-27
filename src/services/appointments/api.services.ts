import { baseClient } from "../api.cilents"
import { Endpoints } from "../constants"

export const addAppoinemt = (payload:any) => {
   return baseClient.post(Endpoints.addAppointment, payload)
}