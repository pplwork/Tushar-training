import React from 'react';


function Login() {
    const [auth, setAuth] = React.useState({ emailid: "", password: "" });
    const handleChange = (e) => {
        var inputName = e.target.name;
        var newValue = e.target.value;
        setAuth((prev) => {
            return {
                ...prev,
                [inputName]: newValue
            }

        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(auth);
    }
    return <div className='login'>
        <h1>Log in</h1>
        <form  style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' onChange={handleChange} value={auth.id} name="emailid" />
            <input type="password" placeholder='Password' onChange={handleChange} value={auth.password} name="password" />
            <button onClick={()=>console.log("clicked")}>Login</button>
        </form>
    </div>;
}

export default Login;