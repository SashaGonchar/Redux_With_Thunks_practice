import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "./userListSlice.js"

function AddUserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const newUser = {name, email, id: Date.now()}

    function handeSubmit(e) {
        e.preventDefault();
        dispatch(addUser(newUser))
        setName("");
        setEmail("");
    }

    return (
        <form className="add-user-form">
            <input type="text"
                   placeholder="Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input type="email"
                   placeholder="Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={handeSubmit}
            >Add User
            </button>
        </form>
    );
}

export default AddUserForm;
