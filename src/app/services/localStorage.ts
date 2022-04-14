export const setToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}

export const removeToken = () => {
  localStorage.removeItem('token')
}
export const getToken = () => localStorage.getItem("token")

