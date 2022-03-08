import React from 'react';
import { Select, InputLabel, MenuItem } from '@material-ui/core/';
import { useSelector } from 'react-redux';
import SelectItem from './SelectItem';


import { useDispatch } from 'react-redux';

const UserSelect = ({ post, setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
  
    return (
        <div>
        <InputLabel>Username</InputLabel><Select
            labelId="username-label"
            id="username"
            value={username}
            key = {post._id}
        >
            {posts.map((post) => (
                <SelectItem post={post} setCurrentId={setCurrentId}/>
            ))}
        </Select></div>

    );
  };
  
  export default UserSelect;