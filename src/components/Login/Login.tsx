import React, {FC, SetStateAction, useState} from 'react';


const Login: FC = () => {
    const [open, setOpen] = useState<SetStateAction<boolean>>(false);
    const [user, setUser] = useState<SetStateAction<string>>("User");
    const [form, setForm] = useState<SetStateAction<any>>({username: "", password: ""});
    const [passwordForChangeName] = useState<SetStateAction<string>>(Math.random().toString());
    const [wrongPassword, setWrongPassword] = useState<string>("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const changeUName = () => {
        if (form.password === passwordForChangeName) {
            setUser(form.username);
            setWrongPassword("");
        } else setWrongPassword("Wrong password");
    };
    const submit = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <button onClick={handleClickOpen} className="loginBTN">{user}</button>
            <div id="login" style={{display: open ? 'block' : 'none'}}>
                <button className="loginBTN1" onClick={handleClose}>X</button>
                <h1>Change username</h1>
                <p>Enter this pass to change username: <mark>{passwordForChangeName}</mark></p>
                <form onSubmit={submit}>
                    <input type="text" name="username" placeholder="username" maxLength={15}
                           onInput={(e: any) => setForm({username: e.target.value, password: form.password})}/>
                    <input type="password" name="password" placeholder="password"
                           onChange={(e: any) => setForm({password: e.target.value, username: form.username})}/>
                    <button onClick={changeUName}>Change name</button>
                </form>
                {wrongPassword && <u style={{color: "lightcoral"}}>wrongPassword</u>}
            </div>
        </>
    );
};

export {Login};