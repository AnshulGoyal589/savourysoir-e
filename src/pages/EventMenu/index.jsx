import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import MenuCard from "./MenuCard";
import "./eventmenu.css";

const EventMenu = (props) => {
    useEffect(() => {
        props.setPreview("Corporate Events");
        AOS.init({
            duration: 500, 
        });
    }, []);

    return (
        <div className="menu-container">
            <div className="menu-main" data-aos="fade-up">
                <h1>Starters</h1>
                <div className="starters">
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        </div>
    );
};

export default EventMenu;
