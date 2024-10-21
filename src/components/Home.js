import { useState,useEffect } from "react";
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    //const [blog, setBlog] = useState(null);
    // const [isPending,setisPending]=useState(true);
    // const [error,setError]=useState(null);

    const {blog,isPending,error}=useFetch('http://localhost:8081/blogs');    {/* used custom hook */}

    // const handleDelete = (id) => {
    //     const newBlog = blog.filter((blog) => blog.id !== id);         {/*use of filter*/}
    //     setBlog(newBlog);
    // };

    // useEffect(()=>{
    //     fetch('http://localhost:8000/blogs')
    //     .then(res=>{
    //         if(!res.ok){
    //             throw Error('Didnt receive data');          {/* Error throwing */}
    //         }
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setBlog(data);
    //         setisPending(false);
    //         setError(null);
            
    //     })
    //     .catch(err=>{console.log(err); setError('cannot load data'); setisPending(false)}  );        {/* Error catching */}
        
    // },[]);   {/* how to fetch data from json file using json-server using promise*/}

    return (
        <div>
            {error && <h2>{error.message}</h2>}
            {isPending && 'is Loading..'}
          {blog &&  <BlogList blog={blog}  /> }  {/** how to use logical operator and filter null blogs */}
          {blog &&  <BlogList 
                blog={blog.filter((blog) => blog.author === 'Reva1')} 
                
            /> }
            
        </div>
    );
};

export default Home;
