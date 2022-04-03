import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function ReactRouters(){
    return (
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Detail/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    );
}

export default ReactRouters;