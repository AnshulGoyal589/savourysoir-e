import "./header.css"
import Navbar from "./navbar/index.jsx"
import Details from "./details/index.jsx"
import Preview from "./preview/index.jsx"
import {useState} from "react"
const Header=(props)=>{
    return (
        <div className="header">
            <Details/>
            <Navbar/>
            <Preview page={props.page}/>
        </div>
    )
}
export default Header;