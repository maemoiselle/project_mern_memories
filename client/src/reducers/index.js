import { combineReducers } from 'redux';

import posts from './posts';
import crafts from './crafts';
import materials from './materials';

// export const reducers = combineReducers({ posts });


export const reducers = combineReducers({ posts: posts, crafts: crafts, materials: materials });
