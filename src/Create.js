import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setisPending] = useState(false)
    const history = useHistory(); // we can go forward or back in the browsers history

const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setisPending(true);

    // use fetch api with same (url) endpoint
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setisPending(false);
        // history.go(-1); // to go back one step in my browser actions
        history.push('/'); // this will take us to the homepage
    })
}

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}    
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending ? <button>Add blog</button> : <button disabled>Adding blog...</button>}
                {/* can use the below, or the terniary operator as i did above */}
                {/* {!isPending && <button>Add blog</button>}
                {isPending && <button>no blog</button>} */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;