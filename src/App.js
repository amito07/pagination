import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import FetchData from './components/FetchData';
import Pagination from './components/Pagination';
const axios = require('axios');

function App() {
  const [posts, setPosts] = useState([]);
  const [ggpost,setGgpost] =useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  useEffect(() => {
    const fetdata = async()=>{
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`);
      const resdata = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const posts = res.data;
      const ggpost = resdata.data;
      setGgpost(ggpost)
      setPosts(posts);
      setLoading(false);
    }
    fetdata()
  }, [currentPage,])
  //Current Page data
  // const indexOfLastPost = currentPage*postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const currentPosts = posts

  //change page function
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Home Page</h1>
      <FetchData posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={ggpost.length} paginate={paginate}/>
    </div>
  );
}

export default App;
