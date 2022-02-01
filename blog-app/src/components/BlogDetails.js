import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, pending } = useFetch('http://localhost:8000/blogs/' + id);
    return <div>
        {error && <div>{error}</div>}
        {pending && <div>Loading ...</div>}
        {
            blog &&
            <div className="blog-details">
                <h1 className="blog-title">{blog.title}</h1>
                <p className='blog-author'>Written by <b>{blog.author}</b></p>
                <h3 className='blog-body'>{blog.body}</h3>
            </div>
        }

    </div>;
}

export default BlogDetails;
