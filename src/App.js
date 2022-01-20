import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";

import {NotFoundPage, PostPage, PostsPage, PostCommentsPage, UserPage, UsersPage, UserPostsPage} from './pages';


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Navigate to={"users"}/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<UserPage/>}>
                            <Route path={"posts"} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<PostPage/>}>
                            <Route path={"comments"} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;