import {useEffect} from "react"
const EventHome=(props)=>{
    useEffect(()=>{
        props.setPreview("Services");
    },[])
    return (
        <div>
            Hello there
        </div>
    )
}
export default EventHome;