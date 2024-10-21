import { useEffect,useState } from "react";

{/* making custom hook to fetch data*/}



const useFetch=(url)=>{

    const [blog, setBlog] = useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);

    const handleDelete = (id) => {
        const newBlog = blog.filter((blog) => blog.id !== id);         {/*use of filter*/}
        setBlog(newBlog);
    };

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Didnt receive data');          {/* Error throwing */}
            }
            return res.json();
        })
        .then(data=>{
            setBlog(data);
            setisPending(false);
            setError(null);
            
        })
        .catch(err=>{console.error(err);
            setError({ message: 'Cannot load data' });
            setisPending(false); });        {/* Error catching */}
        
        
    },[url]);      {/* how to fetch data from json file using json-server using promise*/}
    return {blog,isPending,error};
}

export default useFetch;