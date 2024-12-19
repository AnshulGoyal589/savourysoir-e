import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import EventHome from "./pages/Events/index.jsx"
import Header from "./components/header/index.jsx"
import Footer from "./components/footer"
import {useState} from "react"
const App=()=>{
    const [pageData,setPageData]=useState("");
    return (
        <>
        <Header page={pageData}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home setPreview={setPageData}/>}/>
                <Route path="/events" element={<EventHome setPreview={setPageData}/>}/>
            </Routes>
        </Router>
        <Footer/>
        </>
    )
}
export default App;