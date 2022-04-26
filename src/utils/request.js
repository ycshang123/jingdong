import axios from 'axios'
import { reject } from 'core-js/fn/promise'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:4523/mock/419668/api',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    (response) => {
      resolve(response, data)
    },
      (err) => {
        reject(err)
      }
  })
}


export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response, data)
    },
      (err) => {
        reject(err)
      }
    )
  })
}
