import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import EventHome from "./pages/Events/index.jsx"
const App=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/events" element={<EventHome/>}/>
            </Routes>
        </Router>
    )
}
export default App;