import React from 'react';

function CreateProject() {
    const [auth, setAuth] = React.useState({ title: "", details: "" });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auth);
    }
    return <div className='login'>
        <h1>Create Project</h1>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <input type="text" placeholder='Project Title' onChange={handleChange} value={auth.title} name="title" />
            <input type="text" placeholder='Project Details' onChange={handleChange} value={auth.details} name="details" />
            <button onClick={() => console.log("clicked")}>Add</button>
        </form>
    </div>;
}

export default CreateProject;
