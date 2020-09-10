import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
  // headers: {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  //   common: [{ "Access-Control-Allow-Origin": "*" }]
  // }
})

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export default {
  getTodos() {
    return apiClient.get(`/todos`)
  }
  //  // In case we want to do the pagination
  //  // on the server side
  // getTodos(limit: any) {
  //   return apiClient.get(`/todos?_limit=${limit}`)
  // }
}
