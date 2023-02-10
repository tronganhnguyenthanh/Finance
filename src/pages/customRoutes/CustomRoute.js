import axios from "axios"
import React, {useState} from "react"
import {Button} from "react-bootstrap"
const CustomRoute = () => {
  const [data, setData] = useState([])
  const handleRandomCat = async () => {
    let res = await axios.get("https://api.thecatapi.com/v1/images/search")
    setData(res?.data)
  }
  return (
   <>
    <div className="d-flex justify-content-center">
      <Button className="btn-random-cat" onClick={handleRandomCat}>Show cute cats</Button>
    </div>
    {data?.length > 0 && data?.map((i) => {
       return(
        <div key={i?.id} className="d-flex justify-content-center"> 
          <img src={i?.url} alt="" style={{width:i?.width, height:i?.height, padding:"2px"}}/>
        </div>
       )
     })
    }
   </>
  )
}

export default CustomRoute