import React from 'react';
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [author, setAuthor] = React.useState('Tushar Jha');
  // let history = useHistory();
  const navigate=useNavigate();
  const [pending, setPending] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'Post',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setPending(false);
      console.log("new Blog added");
      navigate("/");
      // history.push("/");
    })
  }

  return <div className='add-blog'>
    <h2>ADD BLOG</h2>
    <form className='add-form' onSubmit={handleSubmit}>
      <label>Blog Title:</label>
      <input
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
      ></input>
      <label>Blog Body:</label>
      <textarea
        value={body}
        onChange={(e) => { setBody(e.target.value) }}
      ></textarea>
      <label>Blog Author:</label>
      <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="Tushar Jha">Tushar Jha</option>
        <option value="Tushar Gupta">Tushar Gupta</option>
      </select>
      {!pending && <button type="submit">ADD BLOG</button>}
      {pending && <button disabled>Adding Blog...</button>}
    </form>
  </div>;
}

export default AddBlog;
