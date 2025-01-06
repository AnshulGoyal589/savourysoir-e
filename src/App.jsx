import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import EventHome from "./pages/Events/index.jsx"
import Header from "./components/Header/index.jsx"
import Footer from "./components/Footer/index.jsx"
import {useState} from "react"
import AboutUs from "./pages/AboutUs"
import ContactUs from './pages/ContactUs'
import EventMenu from "./pages/EventMenu"
const App=()=>{
    const [pageData,setPageData]=useState("");
    return (
        <>
        <Header className="w-full" page={pageData}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home setPreview={setPageData}/>} />
                <Route path="/events" element={<EventHome setPreview={setPageData}/>}/>
                <Route path="/about-us" element={<AboutUs setPreview={AboutUs}/>}/>
                <Route path="/contact-us" element={<ContactUs setPreview={setPageData}/>}/>
                <Route path="/corporate-event" element={<EventMenu setPreview={setPageData}/>}/>
            </Routes>
        </Router>
        <Footer/>
        </>
    )
}
export default App;