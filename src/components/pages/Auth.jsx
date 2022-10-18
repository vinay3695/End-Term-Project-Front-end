import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (/^\/auth\/?$/.test(location.pathname.trim())) navigate("/");
    });
    return (
        <section className="flex-1 flex justify-center items-center w-full bg-gray-200 sm:bg-gray-300">
            <Outlet />
        </section>
    );
};

export default Auth;