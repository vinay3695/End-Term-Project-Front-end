import {useState} from "react";
import {
    createTheme,
    FormControl, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    ThemeProvider
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {v4 as uuid} from "uuid";
import bcrypt from "bcryptjs";
import defaultUser from "../../assets/photos/alex-suprun-1JGHAAdbL_Y-unsplash.jpg";

const SignUp = () => {
    const customTheme = createTheme({typography: {"fontFamily": "Product Sans"}});
    const navigate = useNavigate();

    const initialState = {
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        username: "",
        photo: ""
    };

    const [values, setValues] = useState(initialState);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState({regular: false, confirm: false});

    const [errorReason, setErrorReason] = useState("");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = (prop) => {
        setShowPassword({...showPassword, [prop]: !showPassword[prop]});
    };

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

    const createAccountHandler = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3030/users?username=${values.username}`)
            .then(result => {
                if (!result.data.length) {
                    axios.get(`http://localhost:3030/users?email=${values.email}`)
                        .then(result => {
                            if (!result.data.length) {
                                axios.post("http://localhost:3030/users", {
                                    password: bcrypt.hashSync(values["password"], 10),
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    email: values.email,
                                    phone: values.phone,
                                    address: values.address,
                                    username: values.username,
                                    id: uuid()
                                })
                                    .then(() => {
                                        setValues(initialState);
                                        setTimeout(() => navigate("/auth/login"), 500);
                                    })
                                    .catch(() => {
                                        setErrorReason("unknown server error occurred");
                                        setTimeout(() => setErrorReason(""), 3000)
                                    });
                            } else {
                                setErrorReason("user exists with same email");
                                setTimeout(() => setErrorReason(""), 3000);
                            }
                        });
                } else {
                    setErrorReason("user exists with same username");
                    setTimeout(() => setErrorReason(""), 3000);
                }
            });
    };

    return (
        <div className="py-16 w-full sm:max-w-xl">
            <form onSubmit={createAccountHandler} className="flex flex-col gap-6 p-16 sm:p-8 sm:rounded-lg bg-stone-200 sm:border border-g-blue">
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 pb-6">create an account</h4>
                <ThemeProvider theme={customTheme}>
                    <div className="flex flex-col items-center">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <div
                            style={{backgroundImage: `url('${values.photo ? values.photo : defaultUser}')`}}
                            className="flex justify-end items-end h-56 w-56 bg-center bg-cover bg-g-blue rounded-full border border-g-blue"
                        >
                            <label htmlFor="universe-gallery-file" className="flex justify-center items-center h-[3.5rem] w-[3.5rem] rounded-full bg-g-blue cursor-pointer">
                                <span className="material-symbols-outlined text-[2rem] font-extralight text-neutral-200 -translate-y-[3px]">edit_square</span>
                            </label>
                            <input type="file" id="universe-gallery-file" className="hidden max-w-sm py-1 px-4 border border-black" onChange={getImage} />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextField
                            label="First Name"
                            variant="outlined"
                            size="small"
                            value={values.firstName}
                            onChange={handleChange("firstName")}
                            required
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            value={values.lastName}
                            onChange={handleChange("lastName")}
                            required
                        />
                    </div>
                    <TextField
                        label="Username"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={values.username}
                        onChange={handleChange("username")}
                        required
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextField
                            label="Email"
                            variant="outlined"
                            size="small"
                            value={values.email}
                            onChange={handleChange("email")}
                            required
                        />
                        <TextField
                            label="Phone"
                            variant="outlined"
                            size="small"
                            type="phone"
                            value={values.phone}
                            onChange={handleChange("phone")}
                            required
                        />
                    </div>
                    <TextField
                        label="Address"
                        variant="outlined"
                        size="small"
                        type="text"
                        value={values.address}
                        onChange={handleChange("address")}
                        required
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <FormControl size="small" variant="outlined" required>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword.regular ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleClickShowPassword("regular")}
                                            onMouseDown={e => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword.regular ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl size="small" variant="outlined" required>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-confirm-password"
                                type={showPassword.confirm ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.currentTarget.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => handleClickShowPassword("confirm")}
                                            onMouseDown={e => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="ConfirmPassword"
                            />
                        </FormControl>
                    </div>
                </ThemeProvider>
                <button type="submit" className="py-2 px-4 rounded bg-g-blue text-white">Sign Up</button>
                <Link className="text-gray-700 mt-6" to="/auth/login">Already have an account -></Link>
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

export default SignUp;