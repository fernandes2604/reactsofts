import NavBar from "../layouts/NavBar"
import { useEffect } from "react"
export default function TemplatesDeblogs() {
  useEffect (()=>{
    document.title='Sites Softs - Templates para blogs'
},[])
    return(
        <div id="blog">
          <NavBar/>          
        </div>
    )
}
