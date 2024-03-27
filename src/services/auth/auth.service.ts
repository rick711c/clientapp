import { baseClient } from "../api.cilents"
import { Endpoints } from "../constants"

export const requestOTP = (payload:any) => {
   return baseClient.post(Endpoints.requestOTP, payload)
}

export const login = (payload:any) => {
    return baseClient.post(Endpoints.login, payload)
}