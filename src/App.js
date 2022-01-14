import './App.css';
import Users from "./components/Users_Posts_Comments/Users";
import Posts from "./components/Users_Posts_Comments/Posts";
import Comments from "./components/Users_Posts_Comments/Comments";

function App() {

    return (
        <div className='blocks'>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;