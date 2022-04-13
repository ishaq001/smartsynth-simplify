export const setTokens = (authRes: any) => {
  localStorage.setItem('token', JSON.stringify(authRes.token))
  localStorage.setItem('refreshToken', JSON.stringify(authRes.refreshToken))
}

export const removeTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('token')
}
export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1)
export const getRefreshToken = () => localStorage.getItem('refresh_token')
