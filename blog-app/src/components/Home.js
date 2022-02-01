import React from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
    const Navigate=useNavigate();
    const { data: blogs, pending, error } = useFetch('http://localhost:8000/blogs');
    const handleDelete = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            Navigate("/");
            console.log("deleted blog");
        })
    }


    return <div className="home">
        <h2>ALL BLOGS</h2>
        {error && <div>{error}</div>}
        {pending && <div>Loading ...</div>}
        {blogs && blogs.length === 0 && <h2>No blogs yet :(</h2>}
        {blogs &&
            blogs.map((blog) => {
                return (
                    <Link to={`/blogs/${blog.id}`} className="blog-link">
                        <BlogList key={blog.id} id={blog.id} title={blog.title} body={blog.body} author={blog.author} handleClick={handleDelete} />
                    </Link>
                )
            })
        }
    </div>;
}

export default Home;
