import { combineReducers } from 'redux';

import posts from './posts';
import crafts from './crafts';

// export const reducers = combineReducers({ posts });


export const reducers = combineReducers({ posts: posts, crafts: crafts });
