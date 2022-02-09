import React from 'react';


function Signup() {
    const [auth, setAuth] = React.useState({ emailid: "", password: "" ,firstName:"",lastName:""});
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
        <h1>Sign Up</h1>
        <form  style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' onChange={handleChange} value={auth.id} name="emailid" />
            <input type="password" placeholder='Password' onChange={handleChange} value={auth.password} name="password" />
            <input type="text" placeholder='First Name' onChange={handleChange} value={auth.firstName} name="firstName" />
            <input type="text" placeholder='Last Name' onChange={handleChange} value={auth.lastName} name="lastName" />
            <button onClick={()=>console.log("clicked")}>Sign Up</button>
        </form>
    </div>;
}

export default Signup;


