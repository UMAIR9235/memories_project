import React, {useState, useEffect} from "react";
import classes from './Form.module.css';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch();

    useEffect(() => {
        if(post){
            setPostData(post);
        }
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData))
        }
        clear();

    }

    const clear = () => {
        setCurrentId(null)
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }

    return <div className={classes.createMemoryForm}>
        <h3>{currentId ? "Editing" : "Creating"} a Memory</h3>
        <form className={classes.form} onSubmit={handleSubmit}>
            <input type="text" name="creator" placeholder="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
            <input type="text" name="title" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
            <input type="text" name="message" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})}/>
            <input type="text" name="tags" placeholder="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
            <div className={classes.fileInput}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} />
            </div>
            <button className={classes.submit} type="submit">Submit</button>
            <button className={classes.clear} onClick={clear}>Clear</button>
        </form>
    </div>
}

export default Form;