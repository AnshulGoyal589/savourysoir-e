import { useEffect,useRef} from "react";
import MenuCard from "./MenuCard"
import Course from "./Course"
import "./eventmenu.css"
const EventMenu=(props)=>{
    const scrollRef=useRef(null);
    useEffect(()=>{
        props.setPreview("Corporate Events");
    },[])
    return (
    <div className="menu-container">
        <Course name="Starters" color="yelloworange"/>
        <Course name="Appetizers" color="#f78d4a"/>
        <Course name="Main Course" color="maroon"/>
    </div>
    )
}
export default EventMenu;