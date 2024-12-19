import {useEffect} from "react"
import Corporate from "../../assets/events/Corporate.png"
import Table from "../../assets/events/Table.png"
import Yashobhoomi from "../../assets/events/Yashobhoomi.png"
import Social from "../../assets/events/Social.png"
import Engagement from "../../assets/events/Engagement.png"
import Birthday from "../../assets/events/Birthday.png"
import Wedding from "../../assets/events/Wedding.png"
import "./events.css"
const EventHome=(props)=>{
    useEffect(()=>{
        props.setPreview("Services");
    },[])
    return (
    <div className="event-container">
        <div className="event-list">
            <div className="corporate-event" style={{backgroundImage:`url(${Corporate})`}}>
                <div className="placeholder"></div>
                <div className="auxiliary">
                    <h2 >Corporate Events</h2>
                    <div className="description">
                        <p>
                          qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                        </p>
                    </div>
                   <button>View More</button>
                </div>
            </div>
            <div className="social-event" style={{backgroundImage:`url(${Social})`}}>
                <div className="circle">
                    <h2>
                        Social Gatherings
                    </h2>
                    <p>
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                    </p>
                    <button>
                    View More
                    </button>
                </div>
            </div>
            <div className="international-event">
                <div className="img-backdrop" style={{backgroundImage:`url(${Yashobhoomi})`}}>
                    <h2>
                        International Conventions
                    </h2>
                </div>
                <div className="title">
                    <p>
                    qui dolorem ipsum liquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                    </p>
                    <button>
                        View More
                    </button>
                </div>
            </div> 
            <div className="engagement" style={{backgroundImage:`url(${Engagement})`}}>
                <div className="simple">
                    <h2>
                        Engagement Ceremonies
                    </h2>
                    <p>
                    qui dolorem adipisci velit, sed quia non numquam eius modi temp dolorem ipsum quia dolor sit amet, dolorem ipsum quia dolor sit amet, 
                    </p>
                    <button>View More</button>
                </div>
            </div>
            <div className="birthday">
                <div className="image-container">
                    <img src={Birthday}/>
                </div>
                <div className="title">
                    <h2>
                        Birthdays
                    </h2>
                    <button>
                        View More
                    </button>
                </div>
                <div className="color-line">
                </div>
                <div className="description">
                qui dolorem adipisci velit, sed quia non numquam eius modi temp dolorem ipsum quia dolor sit amet, dolorem ipsum quia dolor sit 
                </div>
            </div>
            <div className="quick-links" style={{backgroundImage:`url(${Wedding})`}}>
                <p> qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun ci velit, sed quia non numquam eius modi tempora in qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>
                <h1>Weddings</h1>
            </div>
        </div>
        <div className="on-your-right">
            <div className="quick-links" style={{backgroundImage:`url(${Table})`}}>
                <div className="inner-content">
                   <h2>
                      Event Domains
                  </h2>
                  <p>
                 qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun
                 </p>
                </div>
            </div>
            <div className="quick-links" style={{backgroundImage:`url(${Wedding})`}}>
                <p> qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun ci velit, sed quia non numquam eius modi tempora in qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidun</p>
                <h1>Weddings</h1>
            </div>
        </div>
    </div>
    )
}
export default EventHome;