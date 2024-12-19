import "./navbar.css"
import {useState} from "react"
import MenuIcon from "../../../assets/header/MenuIcon.png"
import CollapseArrow from "../../../assets/header/CollapseArrow.png"
const Navbar=()=>{
    const [sideBar,setSideBar]=useState(true);
    return(
        <div className="navbar">
            <div className="title">
                <text>ENCANTO</text>
            </div>
            <div className="navigation">
                <div>
                    <a href="/" onClick={{}}><button>HOME</button></a>
                </div>
                <div>
                    <a href="/events"><button>EVENTS</button></a>
                </div>
                <div>
                    <a href="/contact-us"><button>CONTACT US</button></a>
                </div>
                <div>
                    <a href="/about-us"><button>ABOUT US</button></a>
                </div>
                <div>
                    <a href="/blog"><button>BLOG</button></a>
                </div>
            </div>
            <div className="optional">
                <img src={MenuIcon} onClick={()=>{setSideBar(true)}}/>
            </div>
            {sideBar?
            <>
            <div className="sidebar"> 
                <div>
                    <text>Home</text>
                </div>
                <div>
                    <text>Events</text>
                </div>
                <div>
                    <text>Contact Us</text>
                </div>
                <div>
                    <text>About Us</text>
                </div>
                <div>
                    <text>Blog</text>
                </div>
            </div>
            <div class="collapse-sidebar" onClick={()=>{setSideBar(false)}} style={{fontFamily:"sans-serif"}}>
                    {"x"}
            </div>
            </>
            :
            null
            }
        </div>
    )
}
export default Navbar;