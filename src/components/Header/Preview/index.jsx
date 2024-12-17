import CanteenHome from "../../../assets/header/CanteenHome.png"
import "./preview.css"
const Preview=(props)=>{
    return (
        <div style={{backgroundImage:`url(${CanteenHome})`}} className="preview">
            <p>Home &nbsp; {" > "} &nbsp; {props.page}</p>
           <text>{props.page}</text>
        </div>
    )
}
export default Preview;