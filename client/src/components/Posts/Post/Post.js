import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();


  return (
    <Card >
      <div >
        <Typography variant="h6">{post.username}</Typography>
      </div>
      <div>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography gutterBottom variant="h5" component="h2">{post.username}</Typography>
      <CardContent>
      
      </CardContent>

    </Card>
  );
};

export default Post;
