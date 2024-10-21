import {useState} from 'react';

const Create=()=>{

    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');

    const handleOnSubmit=(e)=>{
           {/* to prevent refreshing of page after submitting */}
        const blog={title,body,author};

        fetch('http://localhost:8081/blogs',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        })
    }
    return(
        <div className='create'>
            <form onSubmit={handleOnSubmit()}>
                <label>Blog Title: </label>

                  {/* how to keep track of title or any element as user is typing*/}

                <input type="text" value={title}
                 onChange={(e)=>{setTitle(e.target.value)}}        
                 required></input>
                <label>Blog Content</label>
                <textarea type="text"
                onChange={(e)=>{setBody(e.target.value)}}
                required></textarea>
                <label>Blog author</label>
                <select 
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="author1">author1</option>
                    <option value="author2">author2</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;