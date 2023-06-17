import React, {useState, useEffect} from 'react';
import classes from './Home.module.css';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className={classes.grid}>
            <div className={classes.posts}>
                <Posts  setCurrentId={setCurrentId}/>
            </div>
            <div className={classes.form}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </div>
      </div>
  )
}

export default Home