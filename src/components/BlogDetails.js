import { useParams,useState } from "react";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();   // Get id from the URL parameters
    const { blog, isPending } = useFetch(`http://localhost:8081/blogs/${id}`);  // Include / between 'blogs' and id

    return (
        <div className="Details">
            <h2>These are the details of the blog - {id}</h2>
            {isPending && <div>Loading...</div>}
            {blog && (
                <>
                    <h1>Title - {blog.title}</h1>
                    <h3>{blog.content}</h3>
                </>
            )}
        </div>
    );
}

export default BlogDetails;
