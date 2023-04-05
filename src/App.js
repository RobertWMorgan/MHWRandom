import { useData } from './hooks/ApiData.js'
import { useState } from 'react'

function App() {
  const [ loaded, setLoaded ] = useState(false)
  const result = useData({ loaded, setLoaded })
  

  return (
    <main>
      <p>bottom text</p>
    </main>
  );
}


export default App;
