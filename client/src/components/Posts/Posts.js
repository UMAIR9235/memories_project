import React from "react";
import Post from "./Post/Post";
import {useSelector} from 'react-redux';


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts, "hello");

    return (
        !posts.length ? <p>Loading...</p> : posts.map((post) => <Post post={post} setCurrentId={setCurrentId}/>)
)}

export default Posts;