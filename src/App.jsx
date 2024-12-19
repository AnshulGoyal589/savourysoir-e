import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import EventHome from "./pages/Events/index.jsx"
import Header from "./components/header/index.jsx"
import {useState} from "react"
import AboutUs from "./pages/AboutUs"
const App=()=>{
    const [pageData,setPageData]=useState("");
    return (
        <>
        <Header className="w-full" page={pageData}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/events" element={<EventHome setPreview={setPageData}/>}/>
                <Route path="/about-us" element={<AboutUs setPreview={setPageData}/>}/>
            </Routes>
        </Router>
        </>
    )
}
export default App;