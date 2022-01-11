import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

    return (
      <div className="home">
        <BlogList blogs={blogs} title="Wasssap" handleDelete={handleDelete} />
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="U wot m8" /> */}
        {/* filter through the array and return to me each case whereby the author's name is 'mario' */}

        {/* <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button> */}
        {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
      </div>
    );
  }
   
  export default Home;