import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

const useCallApi = (api) => {
  const [data, setData] = useState([])
  useEffect(()=>{
  axios.get(api)
  .then((res) => setData(res.data))
  .catch((err) => console.log(err)
  )
})
  return data 
}

export default useCallApi
