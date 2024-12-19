import "./preview.css"
const Preview=(props)=>{
    
    return (
    props.page?
            <div style={{backgroundImage:`url(./${props.page}.png)`}} className="preview">
                <p>Home &nbsp; {" > "} &nbsp; {props.page}</p>
                <text>{props.page}</text>
            </div>
    :
    null
    )
}
export default Preview;