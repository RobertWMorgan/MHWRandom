import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [ mhwData, setMhwData ] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://mhw-db.com/monsters')
        setMhwData(data)
        console.log({ mhwData })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  

  return (
    <h1>bottom text</h1>
  );
}

export default App;
