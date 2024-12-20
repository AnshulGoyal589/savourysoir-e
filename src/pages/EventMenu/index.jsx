import { useEffect } from "react";
import MenuCard from "./MenuCard"
import "./eventmenu.css"
const EventMenu=(props)=>{
    useEffect(()=>{
        props.setPreview("Corporate Events");
    },[])
    return (
    <div className="menu-container">
        <div className="menu-main">
            <h1>Starters</h1>
            <div className="starters">
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
            </div>
        </div>
    </div>
    )
}
export default EventMenu;