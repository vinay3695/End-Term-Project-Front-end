import {useEffect, useState} from "react";
import {
    createTheme,
    TextField,
    ThemeProvider
} from "@mui/material";
import defaultUniverse from './../../assets/photos/1_OPcnaXGJ2DVnSnFuW16PrQ.jpeg';
import axios from "axios";
import bcrypt from "bcryptjs";
import {v4 as uuid} from "uuid";


const CreateUniverse = ({user}) => {
    const customTheme = createTheme({typography: {"fontFamily": "Product Sans"}});
    const initialState = {
        title: "",
        description: "",
        photo: "",
        location: "",
        population: 1,
        id: "",
        rules: []
    };

    useEffect(() => {
        if (user) {
            setValues({...values, id: user?.id});
        }
    }, [user]);

    const [values, setValues] = useState(initialState);

    const [errorReason, setErrorReason] = useState("");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const createNewUniverse = (event) => {
        event.preventDefault();
        console.log(values);
        axios.get(`http://localhost:3030/universes?title=${values.title}`)
            .then(result => {
                console.log(result)
                if (!result.data.length) {
                    axios.post("http://localhost:3030/universes", values)
                        .then(() => {
                            setValues(initialState);
                        })
                        .catch(() => {
                            setErrorReason("unknown server error occurred");
                            setTimeout(() => setErrorReason(""), 3000)
                        });
                } else {
                    setErrorReason("universe exists with the same name");
                    setTimeout(() => setErrorReason(""), 3000);
                }
            });
    };

    const [rule, setRule] = useState("");
    const addRule = () => {
        setValues({...values, rules: [...values.rules, rule]});
        setRule("");
    }

    const removeRule = (rule) => (event) => {
        event.preventDefault();
        setValues({...values, rules: [...values.rules.filter(r => r !== rule)]})
    }

    const getImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const name = event.target.files[0].name;
            let reader = new FileReader();

            console.log({file: event.target.files[0], name: name});
            reader.onload = function (e) {
                setValues({...values, photo: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <div className="py-16 w-full sm:max-w-lg">
            <form onSubmit={createNewUniverse} className="flex flex-col gap-6 p-16 sm:p-8 sm:rounded-lg bg-stone-200 sm:border border-g-green">
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 pb-6">create your own universe</h4>
                <ThemeProvider theme={customTheme}>
                    <div className="flex flex-col items-center">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <div
                            style={{backgroundImage: `url('${values.photo ? values.photo : defaultUniverse}')`}}
                            className="flex justify-end items-end h-56 w-56 bg-center bg-cover bg-g-green rounded-full border border-g-green"
                        >
                            <label htmlFor="universe-gallery-file" className="flex justify-center items-center h-[3.5rem] w-[3.5rem] rounded-full bg-g-green cursor-pointer">
                                <span className="material-symbols-outlined text-[2rem] font-extralight text-neutral-200 -translate-y-[3px]">edit_square</span>
                            </label>
                            <input type="file" id="universe-gallery-file" className="hidden max-w-sm py-1 px-4 border border-black" onChange={getImage} />
                        </div>
                    </div>
                    <TextField
                        label="Title"
                        variant="outlined"
                        size="small"
                        value={values.title}
                        onChange={handleChange("title")}
                        required
                    />
                    <textarea
                        className="py-1.5 px-3 h-20 bg-transparent rounded outline-0 hover:border-neutral-800 border border-neutral-400/80 focus:border-2 focus:border-g-green text-md font-normal text-neutral-800"
                        rows={6}
                        value={values.description}
                        onChange={handleChange("description")}
                        style={{fontFamily: "Product Sans", resize: "none"}}
                        required
                        placeholder="How about few words for your universe?"
                    ></textarea>
                    <TextField
                        label="Location"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={values.location}
                        inputProps={{pattern: "[A-Z0-9]{4,7}.[A-Z0-9]{4,7}.[A-Z0-9]{4,7}.[A-Z0-9]{4,7}"}}
                        onChange={handleChange("location")}
                        required
                    />
                    <TextField
                        label="Population"
                        variant="outlined"
                        size="small"
                        type="number"
                        value={values.population}
                        min={1}
                        onChange={(e) => setValues({...values, population: Number(e.currentTarget.value)})}
                        required
                    />
                    <div className="flex gap-6">
                        <button type="button" onClick={addRule} className="py-2 px-4 bg-g-green rounded text-white">Add rule</button>
                        <TextField
                            className="flex-1"
                            label="Rule"
                            variant="outlined"
                            size="small"
                            type="text"
                            value={rule}
                            onChange={(e) => setRule(e.currentTarget.value)}
                        />
                    </div>
                    <div className="flex flex-wrap gap-4 w-full">
                        {values.rules?.map((tag, i) => (
                            <button onClick={() => removeRule(tag)} key={i} className={`py-1 px-4 rounded text-white ${i % 4 === 0 ? 'bg-g-red' : (i % 4 === 1 ? 'bg-g-yellow' : (i % 4 === 2 ? 'bg-g-green' : 'bg-g-blue'))}`}>{tag}</button>
                        ))}
                    </div>
                </ThemeProvider>
                <button type="submit" className="py-2 px-4 rounded animation-bg-g text-white">Create Universe</button>
            </form>
            <div className={`z-[1000] ${errorReason ? 'fixed' : 'hidden'} top-0 left-0 h-full w-full backdrop-blur`}>
                <div className="hidden utility -translate-y-72 translate-y-8"></div>
                <div className={`mx-auto py-8 px-12 w-[30rem] rounded-lg bg-g-red text-gray-200 -translate-y-[400%] ${errorReason ? 'animate-error-modal' : ''} transition-transform duration-1000`}>
                    <div className="text-center mb-4"><span className="material-symbols-outlined text-9xl">error</span></div>
                    <div className="text-2xl">{errorReason}</div>
                </div>
            </div>
        </div>
    );
};

export default CreateUniverse;