import axios from "axios"

const url = 'https://flipkart-api-nlt7.onrender.com'

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data)
  } catch (error) {
    console.log("Error while calling signup api", error.message)
  }
}

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data)
  } catch (error) {
    console.log("Error while calling login api", error.message)
    return error.response
  }
}

