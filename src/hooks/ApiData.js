import axios from 'axios'
import { useState, useEffect } from 'react'



export const useData = ({ loaded, setLoaded }) => {
  const [ mhwData, setMhwData ] = useState([])

  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get('https://mhw-db.com/monsters')
        console.log({ mhwData }, 'getting api')
        setMhwData(data)
        setLoaded(true)
        return mhwData
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    
  }, [loaded]) 
  
}

