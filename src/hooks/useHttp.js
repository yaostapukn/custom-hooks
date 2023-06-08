import { useState, useEffect } from 'react'
import axios from 'axios'

const useHttp = (url, method = 'get', requestData = null) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        let response
        switch (method) {
          case 'get':
            response = await axios.get(url)
            break
          case 'post':
            response = await axios.post(url, requestData)
            break
          case 'put':
            response = await axios.put(url, requestData)
            break
          case 'delete':
            response = await axios.delete(url)
            break
          default:
            throw new Error(`Unsupported HTTP method: ${method}`)
        }
        
        setData(response.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [url, method, requestData])

  return { data, isLoading, error }
}

export default useHttp
