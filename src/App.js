import './App.css';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Auth from "./components/pages/Auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Settings from "./components/auth/Settings";
import {useEffect, useState} from "react";
import Edit from "./components/auth/Edit";
import Universe from "./components/pages/Universe";
import ListUniverse from "./components/universe/ListUniverse";
import CreateUniverse from "./components/universe/CreateUniverse";
import EditUniverse from "./components/universe/EditUniverse";
import axios from "axios";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [auth, setAuth] = useState({
        user: null
    });
    useEffect(() => {
        if (window.localStorage.getItem("universalIdentity")) {
            axios.get(`http://localhost:3030/users/${window.localStorage.getItem("universalIdentity")}`)
                .then(result => {
                    setAuth({user: result.data})
                })
                .catch(error => console.log(error));
        }
    }, [auth]);
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar auth={auth} />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/auth" element={<Auth />}>
                    <Route path="login" element={<Login onAuth={setAuth} />}></Route>
                    <Route path="signup" element={<SignUp />}></Route>
                    <Route path="settings" element={<Settings user={auth.user} onLogout={setAuth} />}></Route>
                    <Route path="edit" element={<Edit user={auth.user} onModify={setAuth} />}></Route>
                </Route>
                <Route exact path="/universe" element={<Universe />}>
                    <Route path="list" element={<ListUniverse />}></Route>
                    <Route path="create" element={<CreateUniverse user={auth.user} />}></Route>
                    <Route path="edit" element={<EditUniverse user={auth.user} />}></Route>
                </Route>
            </Routes>
            <div className="bg-black">
                <hr className="mx-auto w-3/4 text-g-yellow" />
            </div>
            <Footer />
        </div>
    );
}

export default App;
