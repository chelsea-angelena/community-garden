import React from 'react'
import axios from 'axios'

const port=5000

export default function Images() {
const [images, setImages] = useState(null)

useEffect(()=> {
  getImages()
},[])

const getImages = async () => {
  await axios.get('http://localhost:${port}/images')
  .then(data =>
    console.log(data))
}
  return (
    <div>

    </div>
  )
}
