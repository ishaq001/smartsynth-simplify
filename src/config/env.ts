const env = {
  development: {
    BASE_URL: 'http://18.135.231.189:9010/',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact',
  },
  production: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact',
  },
  test: {
    BASE_URL: 'https://jsonplaceholder.typicode.com/',
    USER_NAME: 'j.krrishchandran@gmail.com',
    PASSWORD: 'samplereact',
  },
}

export const env_var = env[process.env.NODE_ENV]
