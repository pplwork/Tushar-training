import React from 'react';

function BlogList(props) {
    return <div className="blog" key={props.id}>
        <h2>{props.title}</h2>
        <h4>{props.body}</h4>
        <p>Written by <b>{props.author}</b></p>
        <button className="delete-button" onClick={() => props.handleClick(props.id)}>Delete Blog</button>
    </div>;
}

export default BlogList;
