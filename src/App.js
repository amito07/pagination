import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import FetchData from './components/FetchData';
import Pagination from './components/Pagination';
const axios = require('axios');

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useEffect(() => {
    const fetdata = async()=>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = res.data;
      setPosts(posts);
      setLoading(false);
    }
    fetdata()
  }, [])
  //Current Page data
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  //change page function
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Home Page</h1>
      <FetchData posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
