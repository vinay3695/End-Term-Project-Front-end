import axios from "axios";
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcryptjs';

const loginAccount = async (credentials, setValues) => {
    axios.get(`http://localhost:3030/users?username=${credentials.username}`)
        .then(result => result.data)
        .then(data => {
            if (data) {
                for (let value of data) {
                    console.log(value);
                    if (value["password"] === credentials.password) {
                        setValues({user: value});
                    }
                }
            }
        })
        .catch(error => console.error(error));
};

const createAccount = async (values) => {
    let result = await axios.get(`http://localhost:3030/users?username=${values.username}`);
    if (!result.data.length) return false;
    result = await axios.get(`http://localhost:3030/users?email=${values.email}`);
    if (!result.data.length) return false;
    values["id"] = uuid();
    values["password"] = bcrypt.hashSync(values["password"], 10);
    axios.post("http://localhost:3030/users", values)
        .then(result => console.log(result))
        .catch(error => console.error(error));
    return true;
};

export {loginAccount, createAccount};