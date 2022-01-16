import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    const formCatch = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...eventData});
        getFilter(eventData);
    };
    return (
        <div>
            <form>
                <input type="text" placeholder="Name" size="32" name={'name'} value={form.name} onChange={formCatch}/>
                <input type="text" placeholder="Username" size="32" name={'username'} value={form.username}
                       onChange={formCatch}/>
                <input type="text" placeholder="Email" size="32" name={'email'} value={form.email}
                       onChange={formCatch}/>
            </form>
        </div>
    );
};

export default Form;