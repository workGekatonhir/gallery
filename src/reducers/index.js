import {combineReducers} from 'redux';
import comments from './comments';
import packages from './package';
import images from './images';
import PictureClick from './PictureClick';
import {routerReducer} from 'react-router-redux';


const galleryReducers = combineReducers ({
    routing: routerReducer,
    comments,
    packages,
    images,
    PictureClick
});

export default  galleryReducers;