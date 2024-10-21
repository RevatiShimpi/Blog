import {Link} from 'react-router-dom';

const BlogList = ({ blog }) => {
    return (
        
        <div className="Home">
            <h1>Blogs Home Page</h1>

            <div className="blogs">
                <h2>{blog.title}</h2>
                {blog.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author} on {blog.Date}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;




 {/* <button onClick={HandleClick}>Click me!!</button>  
            <button onClick={()=>{
                HandleOnClick('Reva')}}>Click me too!!</button>  understnad why cant we write oclick={ahandleClick('name')} directly */}