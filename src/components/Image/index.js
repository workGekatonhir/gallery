import React from 'react';
import style from  './style.css';
import {connect} from 'react-redux';
import {openImage} from '../../actions';

const Image =({image,onOpen})=>{
    let div;
    return (
        <div ref={node=>{div = node}} key={image.id} className={"text-center " +style.myDiv}
            onClick={()=>{

                onOpen(image.id,image.url,div.getBoundingClientRect());
            }}
        ><img  className={style.img} src={image.url} alt={image.id} /></div>
    )

};

const mapStateToProps =(state)=>({
    PictureClick : state.PictureClick
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onOpen: (id,src,element) => {

        dispatch(openImage(id,src,element))
    },


});



export default connect(mapStateToProps,mapDispatchToProps)(Image);