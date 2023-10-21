import React from "react";
import classes from './Post.module.css';
import { BiLike } from "react-icons/bi";
import {FaCommentAlt} from "react-icons/fa";
import {BiShare} from "react-icons/bi";
import {FiMoreHorizontal} from "react-icons/fi";
import {BsPersonFill} from "react-icons/bs";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";



const Post = ({post, setCurrentId}) => {

    const [showEditButton, setShowEditButton] = useState(false);
    const dispatch = useDispatch();
    console.log(post);
    return (
    <div className={classes.postCard}>
        <div className={classes.topDetails}>
            <div className={classes.creatorInfo}>
                <div className={classes.circleImg}>
                    <BsPersonFill />
                </div>
                <div className={classes.createdBy}>
                    <h3>{post.name}</h3>
                    <p>2 minutes ago</p>
                </div>
            </div>
            <div className={classes.dotsButton}>
                <button onClick= {() => setShowEditButton(true)}><FiMoreHorizontal/></button>
            </div>
            {showEditButton && <div className={classes.editPostModal}>
                <button className={classes.closeEditButton} onClick={() => setShowEditButton(false)}>Close</button>
                <button onClick={() => setCurrentId(post._id)}>Edit</button>
                <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            </div>}
        </div>
        <div className={classes.caption}>
            <p>{post.message}</p>
            <p>{post.tags.map((tag) => `#${tag} `)}</p>
        </div>
        <div className={classes.image}>
            <img src={post.selectedFile} alt="post-pic" />
        </div>
        <div className={classes.actions}>
            <div className={classes.actionButtons}>
                <button onClick={() => dispatch(likePost(post._id))}><BiLike />&nbsp;Like {post.likeCount}</button>
                <button><FaCommentAlt />&nbsp;Comment</button>
                <button><BiShare/>&nbsp;Share</button>
            </div>
            <div className={classes.commentInput}>
                <div className={classes.commentCircleImg}>
                <BsPersonFill />
                </div>
                <div className={classes.commentInputDiv}>
                    <input placeholder="Write a comment..." />
                </div>
            </div>
        </div>
    </div>
)}

export default Post;