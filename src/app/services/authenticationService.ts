
import { post } from './apiService'

export interface AuthPayload {
  email: string
  password: string
first_name:string
lasta_name: string
}

export  interface loginPayload{
  email: string
  token: string

}


export const loginUser = async (data: loginPayload) => {
  const response = await post(`/signin`, data)
  return response
}

export const signupUser = async (data: AuthPayload) => {
  const response = await post(`/signup`, data)
  return response
}


