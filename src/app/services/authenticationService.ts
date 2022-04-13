import { getAccessToken } from './localStorage'
import { env_var } from '../../config/env'
import axios from 'axios'
import { post } from './apiService'

export interface AuthPayload {
  username: string
  password: string
}

export const authenticate = async (data: AuthPayload) => {
  const response = await post(`signin`, data)
  console.log('response', response)
  return response
}

export const isAuthenticated = (): boolean => {
  console.log('hereeee are we authorized', getAccessToken() ? true : false)
  return getAccessToken() ? true : false
}
