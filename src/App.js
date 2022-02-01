import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {Layout, CarsAPI, Comments, Posts, Users} from "./components";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>
                <Route path={'/cars'} element={<CarsAPI/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
            </Route>
        </Routes>
    );
}

export default App;