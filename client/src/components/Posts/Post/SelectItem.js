import React from 'react';
import { MenuItem } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

const SelectItem = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <MenuItem value={post.username}>{post.username}</MenuItem>
    );
};

export default SelectItem;