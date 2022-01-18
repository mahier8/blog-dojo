import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true)
  const [error, setError] = useState(null)
  // let name = 'mario';
  // const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);


  // const handleClick = (e) => {
  //   setName('luigi');
  //   setAge(35);
  // }

  // testing what happens in this 
  // const handleClickAgain = (name, e) => {
  //   console.log('hello ' + name, e.target);
  // }

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   // if the id matches what we select, then we filter it
  //   // if not, we keep it
  //   setBlogs(newBlogs);
  // }

  // function runs every time there is a rerender, usually
  //  used to fetch data/communicate with auth system (side effects)
  // any changes in data will therefore fire off the function
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw Error('could not fetch data for that resource');
        }
        return res.json();
      }) // have data but no error
      .then(data => {
        console.log(data);
        setBlogs(data);
        setisPending(false);
        setError(null);
      }) // no data condition but have error
      .catch(err => {
        setisPending(false);
        setError(err.message);
      })
  }, []); 
  // dependency array causes the function to only 
  // run after the first initial render

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {/* if we have blogs, then we move on to rendering the 
        data from the API, which blogs has been set to, with the 
        setBlogs part of the hook (for line below)*/}
        {isPending && <div>Loading...</div>} 
        {blogs && <BlogList blogs={blogs} title="Wasssap" />}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="U wot m8" /> */}
        {/* filter through the array and return to me each case whereby the author's name is 'mario' */}

        {/* <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        {/* <button onClick={() => setName('luigi')}>change name</button>
        <p>{name}</p> */}
        {/* tested useEffect dependency */}
      </div>
    );
  }
   
  export default Home;