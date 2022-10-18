import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Settings = ({user, onLogout}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) navigate('/');
    });

    const handleLogout = () => {
        window.localStorage.removeItem("universalIdentity");
        onLogout({user: null});
        navigate("/");
    };

    return (
        <div className="w-full">
            <div className="py-16 px-12 md:px-16 lg:px-20">
                <button onClick={handleLogout} className="mb-6 py-1 px-3 bg-g-red rounded text-lg text-neutral-200">Log out -></button>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-800 transition-[font-size] duration-1000 text-g">welcome {user?.firstName} {user?.lastName}!</h2>
                <p className="mt-2 py-8 text-justify text-lg">
                    I hope you are doing extraordinary as you just signed up for university creation project.
                    <br />
                    You have taken the first step towards building your own universe.
                    Now towards the next stage, first of all aren't you feelings chills just by thinking about it.
                    Of course you are, what am I even thinking?
                    <br />
                    So towards the next step you will be asked to do nothing, really nothing.
                    Nothing extraordinary at least you just have to think yeah that's it.
                    You don't have to go on the drawing board or go to your 3D modelling shop you just have to think about it.
                    As your brain is the biggest design tool there is in any universe, so we utilise this extreme power and create the universe for you based on your thoughts.
                    So you have to do nothing at all, just go to your little dream world and <a className="font-[G] font-black text-g-green" rel="noreferrer" target="_blank" href="https://dictionary.cambridge.org/dictionary/english/imagine">imagine</a>.
                    <br /><br />
                    P.S. we'll notify you once it's finished.
                    <br /><br />
                    Thanks & Regards
                    <br />
                    <span className="font-[GT] font-black">CinematicGenius007</span>
                </p>
                <div className="mt-4 text-[#414141]">
                    <Link to="/auth/edit">Want to edit your details -></Link>
                </div>
            </div>
            <div className="py-6 px-12 md:px-16 lg:px-20 bg-black"></div>
        </div>
    );
};

export default Settings;